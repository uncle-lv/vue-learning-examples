from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, BigInteger, String, DateTime, Text

Base = declarative_base()


class User(Base):
    __tablename__ = 'user'
    
    id = Column(BigInteger, primary_key=True, autoincrement=True)
    username = Column(String(32), unique=True, nullable=False)
    hashed_password = Column(String(80), nullable=False)
    avatar_url = Column(Text, nullable=False)
    email = Column(String(32), unique=True, nullable=False)
