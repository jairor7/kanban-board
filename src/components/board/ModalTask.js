import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { history } from "../../routes/AppRouter";
import { addTask, editTask } from "../../store/redux/actions/kanbanAction";
import FormTask from "./FormTask";

Modal.setAppElement("#root");

export const ModalTask = ({
  activeTaskModal,
  setActiveTaskModal,
  isEdit,
  addTask,
  editTask,
  currentTask,
  ...props
}) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(1);
  const [stateTask, setStateTask] = useState(0);
  const [hours, setHours] = useState("0");

  useEffect(() => {
    if (isEdit) {
      setTask(currentTask.task);
      setDescription(currentTask.description);
      setPriority(currentTask.priority);
      setStateTask(currentTask.stateTask);
      setHours(currentTask.hours);
    }
  }, [currentTask, isEdit]);

  const handleModalTask = (e) => {
    e.preventDefault();
    setActiveTaskModal((activeTaskModal) => !activeTaskModal);
  };

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handlePriority = (e) => {
    setPriority(parseInt(e.target.value));
  };

  const handleStateTask = (e) => {
    setStateTask(parseInt(e.target.value));
  };

  const handleHours = (e) => {
    setHours(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const taskData = {
      task,
      description,
      priority,
      stateTask,
      hours,
    };
    if (isEdit) {
      editTask(props.uid, taskData, currentTask.id, history);
    } else {
      addTask(props.uid, taskData, history);
    }
    setActiveTaskModal(false);
  };

  const text = isEdit ? "Editar " : "Agregar";

  return (
    <Modal isOpen={activeTaskModal}>
      <h1>{text} tarea</h1>
      <form onSubmit={onSubmit}>
        <FormTask
          handleTask={handleTask}
          handleDescription={handleDescription}
          handlePriority={handlePriority}
          handleStateTask={handleStateTask}
          handleHours={handleHours}
          task={task}
          description={description}
          priority={priority}
          stateTask={stateTask}
          hours={hours}
          isEdit={isEdit}
        />
        <button onClick={handleModalTask}>Cancelar</button>
        <button>{text}</button>
      </form>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  uid: state.loginReducer.user.uid,
});

const mapDispatchToProps = (dispatch) => ({
  addTask: (uid, task, history) => dispatch(addTask(uid, task, history)),
  editTask: (uid, task, taskId, history) =>
    dispatch(editTask(uid, task, taskId, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalTask);
