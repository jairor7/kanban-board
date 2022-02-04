import { kanbanTypes } from "../types";

const kanbanReducerState = {
  tasks: [],
  error: null,
};

export const kanbanReducer = (state = kanbanReducerState, action) => {
  switch (action.type) {
    case kanbanTypes.SET_KANBAN_DATA:
      return {
        ...state,
        tasks: action.tasks,
      };
    case kanbanTypes.SET_KANBAN_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
