import React, { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      title.trim() === "" ||
      dueDate.trim() === "" ||
      description.trim() === ""
    ) {
      alert("Adauga date");
      return;
    }

    const newTask = {
      title,
      description,
      dueDate,
      createdAt: new Date().toISOString(),
    };

    if (onAddTask(newTask)) {
      alert("Task-ul a fost adăugat cu succes!");
    }

    setTitle("");
    setDueDate("");
    setDescription("");
  };

  return (
    <div className="flex justify-center">
      <form className="bg-zinc-800 text-white text-lg shadow-md rounded px-8 mt-10 py-8 mb-4 w-11/12" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg font-bold mb-2" htmlFor="title">
            Titlu
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3"
            id="title"
            type="text"
            placeholder="Titlu"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-bold mb-2" htmlFor="dueDate">
            Termen limita
          </label>
          <input
            className="shadow appearance-none rounded w-full py-2 px-3 bg-neutral-400"
            id="dueDate"
            type="date"
            value={dueDate}
            onChange={handleDueDateChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-bold mb-2" htmlFor="description">
            Descriere
          </label>
          <textarea
            id="description"
            rows="4"
            className="shadow appearance-none border rounded w-full py-2 px-3"
            placeholder="Adauga o descriere"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button className="bg-amber-400 text-slate-900" type="submit">
            Adauga Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
