import { kanbanReducer } from "../../../store/redux/reducers/kanbanReducer";
import { kanbanTypes } from "../../../store/redux/types";
import { tasks, error, kanbanStateDefault } from "../../fixtures/kanban";

test("should set default state", () => {
  const stateCurrent = kanbanReducer(undefined, { type: "@@INIT" });
  expect(stateCurrent).toEqual(kanbanStateDefault);
});

test("should set kanban information", () => {
  const action = {
    type: kanbanTypes.SET_KANBAN_DATA,
    tasks,
  };
  const state = kanbanReducer(kanbanStateDefault, action);
  expect(state.tasks).toEqual(tasks);
});

test("should set kanban error information", () => {
  const action = {
    type: kanbanTypes.SET_KANBAN_ERROR,
    error,
  };
  const state = kanbanReducer(kanbanStateDefault, action);
  expect(state.error).toEqual(error);
});
