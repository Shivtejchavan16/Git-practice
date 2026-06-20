import "./App.css";
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import AddStudent from "./pages/AddStudent"
import StudentList from "./pages/StudentList"
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
   import Reports from "./pages/Reports";
const App = () => {
  return (
    <div>
      <Navbar/>
      
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/studentlist' element={<StudentList/>}/>
        <Route path='/addstudent' element={<AddStudent/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path="*" element={<NotFound/>}/>
<Route path="/reports" element={<Reports />} />
      </Routes>
    </div>
  )
}

export default App
