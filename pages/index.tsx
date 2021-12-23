import Head from "next/head";
import { useEffect, useState } from "react";
import { NewTask } from "../components/NewTask";
import { Profile } from "../components/Profile";
import { Tasks } from "../components/Tasks";

export default function Home() {
  const tasksDefault = [
    {
      name: "Generating XML",
      dueDate: "2021-12-30",
      isPriority: false,
      isCompleted: false,
    },
    {
      name: "Xmax Design ",
      dueDate: "2021-01-03",
      isPriority: true,
      isCompleted: false,
    },
    {
      name: "Making better looking UI",
      dueDate: "2022-02-10",
      isPriority: false,
      isCompleted: false,
    },
    {
      name: "Logic planning",
      dueDate: "2022-01-01",
      isPriority: false,
      isCompleted: true,
    },
  ];
  const [tasks, setTasks] = useState(tasksDefault);
  const [tasksCounts, setTasksCounts] = useState({
    total: tasks.length,
    inProgress: tasks.filter((x) => x.isCompleted === false).length,
    done: tasks.filter((x) => x.isCompleted === true).length,
  });
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setTasksCounts({
      total: tasks.length,
      inProgress: tasks.filter((x) => x.isCompleted === false).length,
      done: tasks.filter((x) => x.isCompleted === true).length,
    });
    return () => {};
  }, [tasks]);

  const addTaskHandler = (newTask) => {
    if (tasks.filter(x => x.name === newTask.name).length === 0) {
      const newTasks = [...tasks, newTask];
      setTasks(newTasks);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  const removeTaskHandler = (name) => {
    console.log(name);
    setTasks((tasks) => {
      return tasks.filter((x) => x.name != name);
    });
  };

  const updateTaskHandler = (name) => {
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
        removeTask={removeTaskHandler}
        updateTask={updateTaskHandler}
      />
      <NewTask addTask={addTaskHandler} isError={isError} />
    </div>
  );
}
