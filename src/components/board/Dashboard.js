import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getAllTask } from "../../store/redux/actions/kanbanAction";
import Kanban from "./Kanban";
import ModalTask from "./ModalTask";

export const Dashboard = (props) => {
  const [activeTaskModal, setActiveTaskModal] = useState(false);

  useEffect(() => {
    props.getAllTask(props.uid);
  }, [props]);

  const handleModalTask = () => {
    setActiveTaskModal((activeTaskModal) => !activeTaskModal);
  };

  return (
    <div>
      {activeTaskModal && (
        <ModalTask
          activeTaskModal={activeTaskModal}
          setActiveTaskModal={setActiveTaskModal}
          isEdit={false}
        />
      )}
      Dashboard
      <div>
        <button onClick={handleModalTask}>Agregar Tarea</button>
      </div>
      <Kanban />
    </div>
  );
};

const mapStateToProps = (state) => ({
  uid: state.loginReducer.user.uid,
});

const mapDispatchToProps = (dispatch) => ({
  getAllTask: (uid) => dispatch(getAllTask(uid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
