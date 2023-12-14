import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TaskDetails from '../../components/TaskInfo';

const TaskPage = () => {
  return (
    <div>
      <Header />
        <TaskDetails />
      <Footer />
    </div>
  );
};

export default TaskPage;