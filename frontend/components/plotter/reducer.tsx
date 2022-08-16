import { Data, PlotData } from "plotly.js";

export enum ActionKind {
  Add = "add-line",
  Update = "update-line",
}

export type Action = {
  type: ActionKind;
  payload: Partial<PlotData>;
};

export const datasetsReducer = (state: Partial<PlotData>[], action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionKind.Add:
      return [...state, payload];
    case ActionKind.Update:
      return updateDataset(state, payload);
    default:
      return state;
  }
};

const updateDataset = (
  state: Partial<PlotData>[],
  dataset: Partial<PlotData>
) => {
  let filtered = state.filter((item) => {
    console.log(`${item.ids} and ${dataset.ids}`)
    return item.ids[0] !== dataset.ids[0]
  });
  console.log(filtered)
  console.log(dataset)
  return [...filtered, dataset];
};

export const initialState: Partial<PlotData>[] = [
  {
    ids: ["1"],
    name: "f(x) = x",
    x: [1, 2, 3, 4],
    y: [1, 2, 3, 4],
    type: "scatter",
  },
];
