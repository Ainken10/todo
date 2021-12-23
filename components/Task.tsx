import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/outline";
import React from "react";

export const Task = ({task,removeTask,updateTask }) => {
  return (
    <div

      className="rounded-lg h-20 w-full border-2 border-green-300 shadow-green-300 shadow-sm p-4 flex items-center justify-between "
    >
      <div onClick={()=> updateTask(task.name)}
        className={`w-10 h-10 rounded-full  transition cursor-pointer ${task.isCompleted
            ? "bg-green-300 text-green-500 "
            : "bg-green-300 text-white "
        } `}
      >
        <CheckCircleIcon className="w-10 h-10 " />
      </div>

      <div className="flex flex-col">
        <p className="text-green-300 text-lg font-semibold">{task.name}</p>
        <div className=" flex flex-wrap space-x-2 items-center justify-center">
          {task.isPriority && (
            <p className="px-2 py-[1px] bg-red-400 rounded-xl w-fit text-xs text-white">
              High
            </p>
          )}
          <p className="text-orange-400 font-semibold">{task.dueDate}</p>
        </div>
      </div>
      <div onClick={() => removeTask(task.name)} className="bg-red-300 w-10 h-10 rounded-full text-white hover:text-red-500 transition cursor-pointer ">
        <XCircleIcon className="w-10 h-10 " />
      </div>
    </div>
  );
};
