import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StudentCard from "../components/StudentCard";

const students = [
  {
    id: 1,
    name: "Rahul Sharma",
    roll: "101",
    className: "10th",
  },
  {
    id: 2,
    name: "Priya Patil",
    roll: "102",
    className: "9th",
  },
];

const StudentList = () => {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ padding: "20px", width: "100%" }}>
          <h1>Student List</h1>

          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </div>
    </>
  );
};

export default StudentList;