from typing import Union, List
from pydantic import BaseModel

class Tableau(BaseModel):
    id: str
    tableau: List[List[float]]