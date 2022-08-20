import { nanoid } from "nanoid";

export async function postMatrix(matrix: number[][]) {
    const endpoint = 'http://localhost:8000/simplex_method'

    let response = await fetch(endpoint, {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: nanoid(),
        tableau: matrix
      })
    })

    return response
}