from fastapi import FastAPI, HTTPException
from linear_programmer.simplex_method import Simplex
import numpy as np
from fastapi.middleware.cors import CORSMiddleware

from models.models import Tableau

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"response": "this is the root path of the api"}


@app.post("/simplex_method")
async def simplex_method(tableau: Tableau):

    tableau = np.array(tableau.tableau).astype(np.float64)
    simplex = Simplex(tableau)
    simplex.run_simplex_method()
    solved_tableau = simplex.solved_tableau.tolist()

    return {
        "tableaus": solved_tableau
    }