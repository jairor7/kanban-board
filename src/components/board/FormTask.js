import React from "react";
import { connect } from "react-redux";

export const FormTask = ({
  handleTask,
  handleDescription,
  handlePriority,
  handleStateTask,
  handleHours,
  task,
  description,
  priority,
  stateTask,
  hours,
  isEdit,
}) => {
  return (
    <div className="form-container row-3 col-2">
      <div className="form-group">
        <label className="required">Título:</label>
        <input
          type="text"
          maxLength="50"
          id="task"
          placeholder="Nombre de la tarea"
          onChange={handleTask}
          defaultValue={task}
          required="required"
          autoComplete="off"
        />
      </div>

      <div className="form-group">
        <label>Tiempo (hr):</label>
        <input
          type="text"
          maxLength="5"
          id="hours"
          onChange={handleHours}
          defaultValue={hours}
        />
      </div>
      <div className="form-group input-description">
        <label>Descripción:</label>
        <textarea
          id="description"
          placeholder="Descripción de la tarea"
          rows="3"
          maxLength="500"
          onChange={handleDescription}
          defaultValue={description}
        ></textarea>
      </div>
      <div className="form-group">
        <label>Prioridad:</label>
        <select id="priority" onChange={handlePriority} defaultValue={priority}>
          <option value={1}>Baja</option>
          <option value={2}>Media</option>
          <option value={3}>Alta</option>
        </select>
      </div>
      {isEdit && (
        <div className="form-group">
          <label>Estado:</label>
          <select
            id="state"
            onChange={handleStateTask}
            defaultValue={stateTask}
          >
            <option value={0}>Backlog</option>
            <option value={1}>To Do</option>
            <option value={2}>Doing</option>
            <option value={3}>Code Review</option>
            <option value={4}>Done</option>
          </select>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FormTask);
