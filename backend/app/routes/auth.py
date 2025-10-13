from fastapi import APIRouter, HTTPException, Depends
from passlib.context import CryptContext
from motor.motor_asyncio import AsyncIOMotorDatabase
from ..db import get_db
from ..models.user import UserCreate, UserPublic

router = APIRouter()
_pwd = CryptContext(schemes=["bcrypt"], deprecated="auto")

@router.post("/signup", response_model=UserPublic, status_code=201)
async def signup(payload: UserCreate, db: AsyncIOMotorDatabase = Depends(get_db)):
    existing = await db.users.find_one({"email": payload.email.lower()})
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")

    password_hash = _pwd.hash(payload.password)
    doc = {
        "firstName": payload.firstName.strip(),
        "lastName": payload.lastName.strip(),
        "email": payload.email.lower(),
        "passwordHash": password_hash,
    }
    result = await db.users.insert_one(doc)
    return UserPublic(id=str(result.inserted_id), firstName=doc["firstName"], lastName=doc["lastName"], email=doc["email"])
