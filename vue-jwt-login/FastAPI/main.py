from fastapi import FastAPI, Depends, status, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from loguru import logger

import db, security, models, schemas


app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post('/api/login/oauth/access_token', status_code=status.HTTP_201_CREATED)
async def create_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(db.get_db)):
    user = security.authenticate_user(form_data.username, form_data.password, db)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Incorrect username or password',
            headers={"WWW-Authenticate": "Bearer"}
        )
        
    access_token = security.create_token(
        data={'username': user.username}
    )
    
    return {
        'token_type': 'Bearer', 
        'access_token': access_token,
        }
    
    
@app.get('/api/auth/current_user', response_model=schemas.UserOut, status_code=status.HTTP_200_OK)
async def get_current_user(current_user: models.User = Depends(security.get_current_user)):
    return current_user