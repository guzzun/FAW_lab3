import './App.css'
import MainPage from './pages/MainPage'
import SavePage from './pages/SavePage'
import TaskPage from './pages/TaskPage'
import AddTaskPage  from './pages/AddTaskPage'
import React from "react";
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/task/:id" element={<TaskPage/>}/>
            <Route path="/add" element={<AddTaskPage />}/>
            <Route path="/save" element={<SavePage/>}/>
        </Routes>
    </>
  )
}

export default App
