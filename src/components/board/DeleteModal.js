import React from "react";
import { connect } from "react-redux";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const DeleteModal = ({
  activeDeleteTask,
  handleDeleteModal,
  deleteTask,
}) => {
  return (
    <Modal isOpen={activeDeleteTask}>
      <h1>Eliminar tarea</h1>
      <p>Esta seguro que desea eliminar esta tarea</p>
      <button onClick={handleDeleteModal}>Cancelar</button>
      <button onClick={deleteTask}>Eliminar</button>
    </Modal>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);
