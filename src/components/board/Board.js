import React, { useState } from "react";
import { connect } from "react-redux";
import Kanban from "./Kanban";
import ModalTask from "./ModalTask";

export const Board = (props) => {
  const [activeTaskModal, setActiveTaskModal] = useState(false);

  const handleModalTask = () => {
    setActiveTaskModal((activeTaskModal) => !activeTaskModal);
  };

  return (
    <section className="main-container">
      {activeTaskModal && (
        <ModalTask
          activeTaskModal={activeTaskModal}
          setActiveTaskModal={setActiveTaskModal}
          isEdit={false}
        />
      )}
      <div className="header-board">
        <div className="title-board">
          <span className="subtitle">Board</span>
          <h1 className="title">Hola {props.displayName}!</h1>
        </div>
        <button className="btn btn-primary" onClick={handleModalTask}>
          <div className="btn-content">
            <span className="content">Nueva tarea</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-add"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
        </button>
      </div>
      <Kanban />
    </section>
  );
};

const mapStateToProps = (state) => ({
  userName: state.loginReducer.user,
  displayName: state.loginReducer.user.displayName,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
