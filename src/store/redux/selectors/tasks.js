import { stateTask } from "../../../utils/constants";

export const selectTasksByState = (task) => {
  let taskOrder = [];
  Object.values(stateTask).forEach((state) => {
    taskOrder.push(
      task
        .filter((task) => task.stateTask === state)
        .sort((a, b) => {
          return b.priority - a.priority;
        })
    );
  });
  return taskOrder;
};
