from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles


app = FastAPI()


#TODO: Heroku does not like static directores. Need to add extra storage
#to heroku

app.mount("/static", StaticFiles(directory="static"), name="static")
app.add_middleware(
     CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():  
    return  {
    "Element": "USP",
    "Class": "container container__phone",
    "Content": "Test DOM Element 1"
}
