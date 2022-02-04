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
  const [textError, setTextError] = useState("");

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
    if (e.target.value.length > 0) {
      setTask(e.target.value);
    } else {
      setTextError("El campo título es obligatorio");
    }
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
    let regex = /^[0-9]*$/;
    if (regex.test(e.target.value)) {
      setHours(e.target.value);
    } else {
      e.target.value = hours;
    }
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
      <div className="modal">
        <h1 className="modal-title">{text} tarea</h1>
        <hr />
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
          <span className="form-text-error">{textError}</span>
          <hr />
          <div className="button-footer">
            <button className="btn btn-secondary" onClick={handleModalTask}>
              Cancelar
            </button>
            <button className="btn btn-primary">{text}</button>
          </div>
        </form>
      </div>
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
