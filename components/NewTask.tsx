import React from "react";
import { useState } from "react";
import Task from "../interfaces/Task";
interface props {
  addTask: (Task) => void;
  isError: boolean;
}

export const NewTask: React.FC<props> = ({ addTask, isError }) => {
  const today = new Date();

  const [name, setName] = useState<string>("");
  const [isPriority, setIsPriority] = useState<boolean>(false);
  const [date, setDate] = useState<string>(today.toISOString().split("T")[0]);

  return (
    <div className="w-full md:w-2/5 min-h-screen bg-green-300 p-5">
      <h1 className="mb-5 text-2xl font-bold text-white"> Create new task</h1>
      <form
        className="flex flex-col space-y-2"
        onSubmit={(e) => {
          e.preventDefault();
          addTask({
            name: name,
            isPriority: isPriority,
            dueDate: date,
            isCompleted: false,
          });
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          className="focus:bg-white w-full rounded-md p-2  focus:border-white focus:outline-none"
          placeholder="Name"
          name="name"
          required
        />
        <select
          name="isPriority"
          id="isPriority"
          onChange={(e) => {
            setIsPriority(e.target.value === "true");
          }}
          required
          className="focus:bg-white w-full rounded-md p-2  focus:border-white focus:outline-none"
        >
          <option value="false">Normal</option>
          <option value="true">High</option>
        </select>
        <input
          name="dueDate"
          type="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          value={date}
          className="focus:bg-white w-full rounded-md p-2  focus:border-white focus:outline-none "
          placeholder="Date"
          required
        />

        <button
          type="submit"
          className="p-2 text-white border-2 border-white rounded-md hover:text-green-300 hover:bg-white transition"
        >
          Create Task
        </button>
        {isError && (
          <p className="text-red-500 font-semibold">
            Task name is already in use.
          </p>
        )}
      </form>
    </div>
  );
};
