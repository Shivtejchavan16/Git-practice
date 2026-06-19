import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import AddStudent from "./pages/AddStudent"
import StudentList from "./pages/StudentList"
const App = () => {
  return (
    <div>
      <Navbar/>
      
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/studentlist' element={<StudentList/>}/>
        <Route path='/addstudent' element={<AddStudent/>}/>
      </Routes>
    </div>
  )
}

export default App
