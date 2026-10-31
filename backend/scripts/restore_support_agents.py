"""Restore missing upstream support agents without modifying existing accounts.

Preview by default; use --apply to insert. New accounts receive unique random
passwords; an administrator can set their passwords through the users page.
"""

import argparse
import asyncio
import json
import secrets
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from sqlalchemy import select

from app.core.database import AsyncSessionLocal, engine
from app.core.security import get_password_hash
from app.models.role import Role
from app.models.user import User
from scripts.seed_db import MOCK_SUPPORT_AGENTS


async def main(apply: bool) -> None:
    try:
        async with AsyncSessionLocal() as session:
            role = (await session.execute(
                select(Role).where(Role.role_name == "SUPPORT_AGENT")
            )).scalar_one()
            users = (await session.execute(select(User))).scalars().all()
            emails = {user.email for user in users}
            ids = {user.id for user in users}
            missing = [agent for agent in MOCK_SUPPORT_AGENTS if agent["email"] not in emails]
            for agent in missing:
                if agent["id"] in ids:
                    raise RuntimeError("Upstream agent ID already belongs to another account")
                if apply:
                    fields = {key: value for key, value in agent.items() if key != "password"}
                    session.add(User(
                        **fields,
                        role_id=role.id,
                        hashed_password=get_password_hash(secrets.token_urlsafe(32)),
                    ))
            if apply:
                await session.commit()
            print(json.dumps({"applied": apply, "missing_count": len(missing),
                              "existing_count": len(users),
                              "created_count": len(missing) if apply else 0}))
    finally:
        await engine.dispose()


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--apply", action="store_true")
    asyncio.run(main(parser.parse_args().apply))
