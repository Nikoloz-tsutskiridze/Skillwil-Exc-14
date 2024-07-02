import React from "react";
import Task from "./Task";

const TaskList = React.memo(
  ({ tasks, onComplete, onDelete, onMove }) => {
    console.log("Rendering task list");

    return (
      <div className="task-column">
        {tasks.map((task, index) => (
          <Task
            key={`${task.id}-${index}`}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
            onMove={onMove}
          />
        ))}
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.tasks.length === nextProps.tasks.length &&
      prevProps.tasks.every(
        (task, index) => task.id === nextProps.tasks[index].id
      )
    );
  }
);

export default TaskList;
