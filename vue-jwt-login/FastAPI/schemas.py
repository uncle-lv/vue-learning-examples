from pydantic import BaseModel, EmailStr


class UserBase(BaseModel):
    username: str
    avatar_url: str
    email: EmailStr
    
    
class UserOut(UserBase):
    id: int
    
    class Config:
        orm_mode = True
    