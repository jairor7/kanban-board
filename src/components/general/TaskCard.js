import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteTask } from "../../store/redux/actions/kanbanAction";
import { DeleteModal } from "../board/DeleteModal";
import ModalTask from "../board/ModalTask";

const TaskCard = ({ task, deleteTask, uid }) => {
  const [activeTaskModal, setActiveTaskModal] = useState(false);
  const [activeDeleteTask, setActiveDeleteTask] = useState(false);

  const handleModalTask = () => {
    setActiveTaskModal((activeTaskModal) => !activeTaskModal);
  };

  const handleDeleteModal = () => {
    setActiveDeleteTask((activeDeleteTask) => !activeDeleteTask);
  };

  const onClickDelete = () => {
    deleteTask(uid, task.id);
  };

  return (
    <div className="card-task">
      {activeTaskModal && (
        <ModalTask
          activeTaskModal={activeTaskModal}
          setActiveTaskModal={setActiveTaskModal}
          currentTask={task}
          isEdit
        />
      )}
      {activeDeleteTask && (
        <DeleteModal
          activeDeleteTask={activeDeleteTask}
          handleDeleteModal={handleDeleteModal}
          deleteTask={onClickDelete}
        />
      )}
      <h3>{task.task}</h3>
      <span>{task.description ? task.description : "No descripción"}</span>
      <div className="card-task__footer">
        <span className="card-task__hours">{task.hours}</span>
        <div className="icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-delete"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleDeleteModal}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-edit"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleModalTask}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  uid: state.loginReducer.user.uid,
});

const mapDispatchToProps = (dispatch) => ({
  deleteTask: (uid, taskId) => dispatch(deleteTask(uid, taskId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskCard);
