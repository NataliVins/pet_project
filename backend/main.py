
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Настройка CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],  # Убрали PUT и DELETE из списка
    allow_headers=["*"],
    expose_headers=["*"]
)

@app.get('/')
async def root():
    return {"status": "Running"}


@app.post('/')
async def add_new_breed(body: dict):
    return {"body": body}