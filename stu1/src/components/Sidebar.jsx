import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{
        width: "220px",
        background: "#1e293b",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2 style={{ color: "white" }}></h2>

      <div style={{ marginTop: "20px" }}>
        <Link to="/dashboard" className="menu">
          Dashboard
        </Link>

        <Link to="/students" className="menu">
          Students
        </Link>

        <Link to="/add-student" className="menu">
          Add Student
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;