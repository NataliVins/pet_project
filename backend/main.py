from fastapi import FastAPI

app = FastAPI()


@app.get('/')
async def root():
    return {"status": "Running"}


@app.post('/')
async def add_new_breed(body: dict):
    return {"body": body}

