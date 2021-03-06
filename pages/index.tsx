import Head from "next/head";
import { useEffect, useState } from "react";
import { NewTask } from "../components/NewTask";
import { Profile } from "../components/Profile";
import { Tasks } from "../components/Tasks";
import Counts from "../interfaces/Counts";
import Task from "../interfaces/Task";

export default function Home() {
  const tasksDefault = [
    {
      name: "Generating XML",
      dueDate: new Date("2021-12-30"),
      isPriority: false,
      isCompleted: false,
    },
    {
      name: "Xmax Design ",
      dueDate: new Date("2021-01-03"),
      isPriority: true,
      isCompleted: false,
    },
    {
      name: "Making better looking UI",
      dueDate: new Date("2022-02-10"),
      isPriority: false,
      isCompleted: false,
    },
    {
      name: "Logic planning",
      dueDate: new Date("2022-01-01"),
      isPriority: false,
      isCompleted: true,
    },
  ];

  const [tasks, setTasks] = useState<Task[]>(tasksDefault);
  const [tasksCounts, setTasksCounts] = useState<Counts>({
    total: tasks.length,
    inProgress: tasks.filter((x) => x.isCompleted === false).length,
    done: tasks.filter((x) => x.isCompleted === true).length,
  });
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setTasksCounts({
      total: tasks.length,
      inProgress: tasks.filter((x) => x.isCompleted === false).length,
      done: tasks.filter((x) => x.isCompleted === true).length,
    });
    return () => {};
  }, [tasks]);

  const handleAddTask = (newTask) => {
    if (tasks.filter((x) => x.name === newTask.name).length === 0) {
      const newTasks = [...tasks, newTask];
      setTasks(newTasks);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  const handleRemoveTask = (name) => {
    console.log(name);
    setTasks((tasks) => {
      return tasks.filter((x) => x.name != name);
    });
  };

  const handleUpdateTask = (name) => {
    let updatedTasks = tasks.map((item) => {
      if (item.name === name) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-wrap">
      <Profile Counts={tasksCounts} />
      <Tasks
        tasks={tasks}
        removeTask={handleRemoveTask}
        updateTask={handleUpdateTask}
      />
      <NewTask addTask={handleAddTask} isError={isError} />
    </div>
  );
}
