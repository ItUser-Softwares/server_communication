from typing import Union
from fastapi import FastAPI

app = FastAPI()



items = {
    1: {"Name": "Apple", "Price": 30, "good": True},
    2: {"Name": "Guava", "Price": 10, "good": True},
    3: {"Name": "Mango", "Price": 50, "good": True},
    4: {"Name": "Banana", "Price": 70, "good": True},
}

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int):
    return items[item_id]
