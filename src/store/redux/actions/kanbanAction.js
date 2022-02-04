import {
  add,
  getTask,
  updateTask,
  removeTask,
} from "../../../api/kanbanService";
import { routes } from "../../../routes/routes";
import { kanbanTypes } from "../types";

const setTaksData = (tasks) => ({
  type: kanbanTypes.SET_KANBAN_DATA,
  tasks,
});

export const addTask = (uid, task, history) => {
  return (dispatch) => {
    return add(task, uid)
      .then(() => {
        dispatch(getAllTask(uid));
        history.push(routes.dashboard);
      })
      .catch((error) => {
        dispatch({
          type: kanbanTypes.SET_KANBAN_ERROR,
          error,
        });
      });
  };
};

export const getAllTask = (uid) => {
  return (dispatch) => {
    return getTask(uid)
      .then((snapshot) => {
        const tasks = [];
        snapshot.forEach((childSnapshot) => {
          tasks.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setTaksData(tasks));
      })
      .catch((error) => {
        dispatch({
          type: kanbanTypes.SET_KANBAN_ERROR,
          error,
        });
      });
  };
};

export const editTask = (uid, task, taskId, history = null) => {
  return (dispatch) => {
    return updateTask(task, uid, taskId)
      .then(() => {
        dispatch(getAllTask(uid));
        history && history.push(routes.dashboard);
      })
      .catch((error) => {
        dispatch({
          type: kanbanTypes.SET_KANBAN_ERROR,
          error,
        });
      });
  };
};

export const deleteTask = (uid, taskId) => {
  return (dispatch) => {
    return removeTask(uid, taskId)
      .then(() => {
        dispatch(getAllTask(uid));
      })
      .catch((error) => {
        dispatch({
          type: kanbanTypes.SET_KANBAN_ERROR,
          error,
        });
      });
  };
};
