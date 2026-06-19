import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ padding: "20px", width: "100%" }}>
          <h1>Dashboard</h1>

          <div className="dashboard-cards">
            <div className="dashboard-card">
              <h2>150</h2>
              <p>Students</p>
            </div>

            <div className="dashboard-card">
              <h2>10</h2>
              <p>Teachers</p>
            </div>

            <div className="dashboard-card">
              <h2>5</h2>
              <p>Courses</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;