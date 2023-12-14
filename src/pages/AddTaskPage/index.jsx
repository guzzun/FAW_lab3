import React, { useState} from 'react';
import Header from '../../components/Header/index.jsx';
import Footer from '../../components/Footer/index.jsx';
import TaskForm from '../../components/TaskForm/index.jsx';
import taskApi from '../../api/tasks/index.js';


const AddTaskPage = () => {
  const [taskList, setTaskList] = useState([]);
  const [sortedTaskList, setSortedTaskList] = useState([]);

  const handleAddTask = async (newTask) => {
    try {
      const response = await taskApi.addTask(newTask);

      if (response.status === 200 || response.status === 201) {
        setTaskList([...taskList, response.data]);
        setSortedTaskList([...sortedTaskList, response.data]);
      } else {
        console.error("Eroare la adăugarea task-ului:", response.statusText);
      }
    } catch (error) {
      console.error("Eroare la adăugarea task-ului:", error.message);
    }
  };

  return (
    <div>
      <Header />
        <TaskForm onAddTask={handleAddTask}/>
      <Footer />
    </div>
  );
};

export default AddTaskPage ;