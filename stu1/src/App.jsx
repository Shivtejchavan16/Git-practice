import { Routes, Route } from "react-router-dom";
import Login1 from "./pages/Login1";
import Dashboard from "./pages/Dashboard";
import StudentList from "./pages/StudentList";
import AddStudent from "./pages/AddStudent";
import Contact from "./pages/Contact";

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Login1 />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/students" element={<StudentList />} />
      <Route path="/add-student" element={<AddStudent />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    
  );
}

export default App;