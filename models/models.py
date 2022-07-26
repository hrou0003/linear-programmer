from typing import Union, List
from pydantic import BaseModel

class Tableau(BaseModel):
    id: str
    tableau: List[List[float]] = [[1, 2, 1, 0, 0, 0, 16], [1, 1, 0, 1, 0, 0, 9], [
        3, 2, 0, 0, 1, 0, 24], [-40, -30, 0, 0, 0, 1, 0]]

