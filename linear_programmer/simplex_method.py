import numpy as np


class Simplex:
    """
    In the simplex method we turn inequalities into equalities by adding slack and artficial variables.
    Each of the contraints can then be uniquely identified by setting exactly one variable to zero.
    Since each line is identified by one variable being zero, each intersection point can be identified 
    by two variables being zero. The two variables that are zero at an intersection point correspond to the non-basic
    variables and the other variables are the basic variables.

    By a theorem of linear algebra, since we have i rows and j columns we must have j-i basic variables. 
    Which is that there will be a basic variable for each row of the tableau and the objective function is always basic
    in the bottom row.


    """

    def __init__(self, tableau):
        # setup
        self.tableau = tableau
        self.tableaus = [tableau]
        self.basic_points = []
        self.pivots = []
        self.solved = False

    def _select_pivot_column(self):
        """
        Select a pivot column by finding the most negative element in the bottom row (excluding the objective value)
        The most negative element means that there is the most to gain in the value of the objective function
        """

        # select all of the bottom row exlcuding the objective value
        bottom_row = self.tableau[-1, :-1]
        # check the break condition that every direction will increase the objective value
        if np.all(bottom_row >= 0):
            return None

        return bottom_row.argmin()

    def select_pivots(self):
        """
        Uses _select_pivot_column to find the row with that column which has the lowest non-zero ratio.

        At this point we have selected a pivot column, that is, the column which gives the greatest 'value' for 
        each step in that direction. Since we are selection a row to go from basic to non-basic, the elimination
        of that row will add to the non-basic which is becoming basic thus we want to select the row which has the smallest ratio
        because otherwise we will be breaking the constraint of the smallest row.

        """
        pivot_column = self._select_pivot_column()
        if pivot_column == None:
            return None

        pivot_ratios = np.divide(
            self.tableau[:-1, -1], self.tableau[:-1, pivot_column])

        pivot = (pivot_ratios[pivot_ratios > 0].argmin(), pivot_column)

        self.pivots.append(pivot)

        return pivot

    def pivot_around(self):

        row, column = self.pivots[-1]
        self.tableau[row, :] /= self.tableau[row, column]
        pivot_row = self.tableau[row, :]
        without_pivot = np.delete(self.tableau, (row), axis=0)
        without_pivot = without_pivot[without_pivot[:, column] != 0]

        for index, rows in enumerate(without_pivot):
            # select the element relevant to the pivot column
            to_be_eliminated = rows[column]
            without_pivot[index, :] -= to_be_eliminated * pivot_row

        if row == 0:
            tableau = np.stack((pivot_row, without_pivot))
            self.tableau = tableau
            return tableau
        else:
            tableau = np.insert(without_pivot, row, pivot_row, axis=0)
            self.tableau = tableau
            return tableau

    def find_basic(self):

        """
        Find 
        """

        bases = []

        for index, column in enumerate(self.tableau[:-1, :-1].T):
            zeros = len(column[column == 0])
            ones = len(column[column == 1])

            if zeros == len(column) - 1 and ones == 1:
                bases.append([column.argmax(), index])

        return bases

    def get_basic_values(self):

        basic_points = self.find_basic()

        for index, point in enumerate(basic_points):
            basic_points[index].append(self.tableau[point[0], -1])

        basic_points = np.round(basic_points)

        self.basic_points.append(basic_points)
        return basic_points

    def run_simplex_method(self):

        tableau = self.tableau

        if self.solved == True:
            return tableau

        while True:

            self.get_basic_values()

            pivot = self.select_pivots()
            if pivot == None:
                self.solved_tableau = np.round(tableau)
                self.solved = True
                return tableau

            tableau = self.pivot_around()


if __name__ == "__main__":

    example_tablau = np.array([[1, 2, 1, 0, 0, 0, 16], [1, 1, 0, 1, 0, 0, 9], [
        3, 2, 0, 0, 1, 0, 24], [-40, -30, 0, 0, 0, 1, 0]]).astype(np.float64)

    new_tableau = Simplex(example_tablau)

    print(new_tableau.tableau)
    print(new_tableau.run_simplex_method())
    print(new_tableau.solved)
    print(new_tableau.basic_points)

    print(f'{[type(point) for point in new_tableau.basic_points]}')
