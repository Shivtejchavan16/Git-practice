import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const AddStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    roll: "",
    className: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Student Added Successfully");

    setStudent({
      name: "",
      roll: "",
      className: "",
    });
  };

  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ padding: "20px", width: "100%" }}>
          <h1>Add Student</h1>

          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              placeholder="Student Name"
              value={student.name}
              onChange={(e) =>
                setStudent({ ...student, name: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Roll Number"
              value={student.roll}
              onChange={(e) =>
                setStudent({ ...student, roll: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Class"
              value={student.className}
              onChange={(e) =>
                setStudent({ ...student, className: e.target.value })
              }
            />

            <button type="submit">Add Student</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddStudent;