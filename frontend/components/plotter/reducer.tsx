
export type DatasetsType = {
  label: string;
  function?: (x: number) => number;
  data: never[];
  borderColor: string;
  fill: boolean;
};

export enum ActionKind {
  Add = "add-line",
  Update = "update-line",
}

export type Action = {
  type: ActionKind;
  payload: DatasetsType;
};

export const datasetsReducer = (state: DatasetsType[], action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionKind.Add:
      return [
        ...state,
        payload,
      ];
    case ActionKind.Update:
        return updateDataset(state, payload)
    default:
        return state
  }
};

const updateDataset = (state: DatasetsType[], dataset: DatasetsType) => {
   let filtered = state.filter(item => (item.label !== dataset.label)) 
   return [
    ...filtered,
    dataset
   ]
}

export const initialState: DatasetsType[] = [
  {
    label: "f(x) = x", // Name it as you want
    function: function (x: number) {
      return x;
    },
    data: [],
    borderColor: "blue",
    fill: false,
  },
];

export const addDefault: Action = {
  type: ActionKind.Add,
  payload: {
    label: "1",
    data: [],
    borderColor: "blue",
    fill: false,
  },
};