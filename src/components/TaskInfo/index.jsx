import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import taskApi from "../../api/tasks/index.js";

const TaskInfo = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await taskApi.getTask(id);
        setTask(data);
      } catch (error) {
        console.error("Error fetching task details:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!task) {
    return <div>Așteptați...</div>;
  }

  const dueDate = new Date(task.dueDate);
  const formattedDueDate = `${dueDate.getDate()}/${dueDate.getMonth() + 1}/${dueDate.getFullYear()}`;

  const createdAt = new Date(task.createdAt);
  const formattedCreatedAt = `${createdAt.getDate()}/${createdAt.getMonth() + 1}/${createdAt.getFullYear()}`;

  return (
    <>
      <div className="w-full font-semibold shadow-lg rounded-xl bg-zinc-800 text-slate-50 p-5 overflow-hidden">
        <div className="flex flex-col items-center mb-2 py-2">
          <p className="text-amber-400 font-normal">Titlu</p>
          <p className="text-lg mt-2">{task.title}</p>
        </div>
        <p className="text-amber-400 font-normal text-base mb-2">Descriere</p>
        <p className="text-lg mb-5">{task.description}</p>
        <hr />
        <div className="flex justify-between items-center mb-2 py-2">
          <p className="text-red-500 text-lg mb-2">Termen: {formattedDueDate}</p>
          <p className="font-normal text-lg mb-2">Creat: {formattedCreatedAt}</p>
        </div>
      </div>
    </>
  );
};

export default TaskInfo;
