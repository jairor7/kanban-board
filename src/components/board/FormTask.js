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
    <div>
      <div className="form-group">
        <label>Tarea:</label>
        <input
          type="text"
          className="form-control"
          id="task"
          placeholder="Nombre de la tarea"
          onChange={handleTask}
          defaultValue={task}
        />
      </div>
      <div className="form-group">
        <label>Descripción:</label>
        <textarea
          className="form-control"
          id="description"
          placeholder="Descripción de la tarea"
          rows="3"
          onChange={handleDescription}
          defaultValue={description}
        ></textarea>
      </div>
      <div className="form-group">
        <label>Tiempo (H)</label>
        <input
          type="text"
          className="form-control"
          id="hours"
          onChange={handleHours}
          defaultValue={hours}
        />
      </div>
      <div className="form-group">
        <label>Prioridad</label>
        <select
          className="form-control"
          id="priority"
          onChange={handlePriority}
          defaultValue={priority}
        >
          <option value={1}>Baja</option>
          <option value={2}>Media</option>
          <option value={3}>Alta</option>
        </select>
      </div>
      {isEdit && (
        <div className="form-group">
          <label>Estado</label>
          <select
            className="form-control"
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
