import {
  add,
  getTask,
  updateTask,
  removeTask,
} from "../../../api/kanbanService";
import { kanbanTypes } from "../types";
import { setLoading } from "./generalAction";
import { setStateLogin } from "./loginAction";

const setTaksData = (tasks) => ({
  type: kanbanTypes.SET_KANBAN_DATA,
  tasks,
});

const setError = (error) => ({
  type: kanbanTypes.SET_KANBAN_ERROR,
  error,
});

export const addTask = (uid, task) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    return add(task, uid)
      .then(() => {
        dispatch(getAllTask(uid));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        dispatch(setLoading(false));
        dispatch(setError(error));
      });
  };
};

export const getAllTask = (uid, user = null) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    return getTask(uid)
      .then((snapshot) => {
        const tasks = [];
        snapshot.forEach((childSnapshot) => {
          tasks.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        user && dispatch(setStateLogin(user));
        dispatch(setTaksData(tasks));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        dispatch(setLoading(false));
        dispatch(setError(error));
      });
  };
};

export const editTask = (uid, task, taskId) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    return updateTask(task, uid, taskId)
      .then(() => {
        dispatch(getAllTask(uid));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        dispatch(setLoading(false));
        dispatch(setError(error));
      });
  };
};

export const deleteTask = (uid, taskId) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    return removeTask(uid, taskId)
      .then(() => {
        dispatch(getAllTask(uid));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        dispatch(setLoading(false));
        dispatch(setError(error));
      });
  };
};
