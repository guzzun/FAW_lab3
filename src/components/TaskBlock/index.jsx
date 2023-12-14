import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import taskApi from "../../api/tasks/index.js";

const TaskBlock = ({ task, onDelete }) => {
  const handleDeleteClick = () => {
    if (window.confirm("Vrei să ștergi acest task?")) {
      onDelete();
    }
  };

  const handleSaved = async (newTask) => {
    const isCurrentlySaved = newTask.isSaved;
    const updatedTask = { ...newTask, isSaved: !isCurrentlySaved };

    try {
      const result = await taskApi.updateTask(updatedTask);

      if (result) {
        const successMessage = updatedTask.isSaved
          ? "Task-ul a fost adăugat în salvate"
          : "Task-ul a fost șters din salvate";

        window.alert(successMessage);
      }
    } catch (error) {
      console.error("Eroare la modificarea task-ului:", error);
      window.alert("Eroare la modificarea task-ului.");
    }
  };

  const dueDate = new Date(task.dueDate);
  const formattedDueDate = `${dueDate.getDate()}/${dueDate.getMonth() + 1}/${dueDate.getFullYear()}`;

  return (
    <div className="bg-zinc-800 shadow-lg rounded-xl p-4 overflow-hidden w-full">
      <div className="text-slate-50 flex gap-4 text-gray-800 text-lg font-medium mb-5">
        <div>{task.title}</div>
        <div> - </div>
        <div className="text-amber-400">{formattedDueDate}</div>
      </div>
      <div className="text-right">
        <Link to={`/task/${task.id}`} task={task}>
          <button className="mx-1">Detalii</button>
        </Link>
        <button
          className="mx-3"
          onClick={() => handleSaved(task)}
        >
          {task.isSaved ? 'Salvat' : 'Nesalvat'}
        </button>
        <button
          className={`mx-1 ${
            task.isSaved ? "opacity-25 cursor-not-allowed" : ""
          }`}
          onClick={!task.isSaved ? handleDeleteClick : undefined}
          disabled={task.isSaved}
        >
          Sterge
        </button>
      </div>
    </div>
  );
};

export default TaskBlock;
