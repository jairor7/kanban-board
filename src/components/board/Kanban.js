import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { selectTasksByState } from "../../store/redux/selectors/tasks";
import { stateTaskName, stateTask } from "../../utils/constants";
import { editTask } from "../../store/redux/actions/kanbanAction";
import TaskCard from "../general/TaskCard";

export const Kanban = (props) => {
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    } else if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    ) {
      return;
    }
    let task = props.allTask.find((task) => task.id === draggableId);
    task.stateTask = stateTaskName.indexOf(destination.droppableId);
    props.editTask(props.uid, task, draggableId);
  };

  return props.totalTask > 0 ? (
    <div className="container container-dashboard">
      {props.orderedTasks && (
        <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
          {props.orderedTasks.map((tasks, index) => (
            <div key={index} className="container-task-state">
              <h2>
                {stateTaskName[index]} ({tasks.length})
              </h2>
              <hr />
              <Droppable
                droppableId={stateTaskName[index]}
                className="container box-kanban"
              >
                {(provided) => (
                  <ul
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="box-kanban"
                  >
                    {tasks.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(draggableProvider) => (
                          <li
                            className={`task-card-${task.priority}`}
                            ref={draggableProvider.innerRef}
                            {...draggableProvider.draggableProps}
                            {...draggableProvider.dragHandleProps}
                          >
                            <TaskCard task={task} />
                          </li>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </div>
          ))}
        </DragDropContext>
      )}
    </div>
  ) : (
    <div>No hay datos para mostrar</div>
  );
};

const mapStateToProps = (state) => ({
  orderedTasks: selectTasksByState(state.kanbanReducer.tasks),
  totalTask: state.kanbanReducer.tasks.length,
  allTask: state.kanbanReducer.tasks,
  uid: state.loginReducer.user.uid,
});

const mapDispatchToProps = (dispatch) => ({
  editTask: (uid, task, taskId, history) =>
    dispatch(editTask(uid, task, taskId, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Kanban);
