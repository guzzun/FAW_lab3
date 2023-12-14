import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TaskList from '../../components/TaskList';

const MainPage = () => {
  return (
    <div>
      <Header />
      <TaskList />
      <Footer />
    </div>
  );
};

export default MainPage;