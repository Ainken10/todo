import React from "react";
import TaskInterface from "../interfaces/Task";
import { Task } from "./Task";

interface props {
  tasks: TaskInterface[];
  removeTask: (name: string) => void;
  updateTask: (name: string) => void;
}

export const Tasks: React.FC<props> = ({ tasks, removeTask, updateTask }) => {
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
