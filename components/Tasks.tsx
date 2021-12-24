import React from "react";
import { Task } from "./Task";
export const Tasks = ({ tasks, removeTask, updateTask }) => {
  return (
    <div className="w-full md:w-2/5 min-h-screenbg-red-400 p-5 flex flex-col space-y-2">
      {tasks.map((task) => {
        return (
          <Task
            key={task.name}
            task={task}
            removeTask={removeTask}
            updateTask={updateTask}
          />
        );
      })}
    </div>
  );
};
