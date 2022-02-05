import { selectTasksByState } from "../../../store/redux/selectors/tasks";
import { tasks } from "../../fixtures/kanban";

test("should set default state", () => {
  const orderedTasks = selectTasksByState(tasks);
  expect(orderedTasks).toEqual([
    [],
    [tasks[1], tasks[0]],
    [],
    [tasks[3], tasks[4], tasks[2]],
    [],
  ]);
});
