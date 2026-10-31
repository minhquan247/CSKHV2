"""Restore missing support attributes for the standard upstream agent.

Preview: python scripts/backfill_support_profile.py
Apply:   python scripts/backfill_support_profile.py --apply

Existing assignments are preserved. No accounts are created and no passwords,
roles, or demo agents are changed.
"""

import argparse
import asyncio
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from sqlalchemy import select

from app.core.database import AsyncSessionLocal, engine
from app.models.role import Role
from app.models.user import User


async def main(apply: bool) -> None:
    try:
        async with AsyncSessionLocal() as session:
            result = await session.execute(
                select(User)
                .join(Role, User.role_id == Role.id)
                .where(User.email == "agent@cskh.vn", Role.role_name == "SUPPORT_AGENT")
                .with_for_update()
            )
            user = result.scalar_one_or_none()
            changes = {}
            if user is not None:
                # Matches users_to_seed in upstream scripts/seed_db.py.
                for field, default in {
                    "support_level": "L1",
                    "skill_group": "ACCOUNT_AUTH",
                }.items():
                    previous = getattr(user, field)
                    if not previous:
                        changes[field] = {"before": previous, "after": default}
                        setattr(user, field, default)
            if apply:
                await session.commit()
            else:
                await session.rollback()
            print(json.dumps({"applied": apply, "changes": changes}))
    finally:
        await engine.dispose()


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--apply", action="store_true")
    asyncio.run(main(parser.parse_args().apply))
