
import { useState } from "react";

const Profile = () => {
  const students = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex.johnson@college.edu",
      phone: "+91 9876543210",
      course: "B.Tech Information Technology",
      semester: "Semester 6",
      address: "Pune, Maharashtra",
    },
    {
      id: 2,
      name: "Sarah Wilson",
      email: "sarah.wilson@college.edu",
      phone: "+91 9876500000",
      course: "BCA",
      semester: "Semester 4",
      address: "Mumbai, Maharashtra",
    },
    {
      id: 3,
      name: "John Smith",
      email: "john.smith@college.edu",
      phone: "+91 9876511111",
      course: "B.Sc Computer Science",
      semester: "Semester 5",
      address: "Nagpur, Maharashtra",
    },
  ];

  const [student, setStudent] = useState(students[0]);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <style>{`
        .profile-container {
          padding: 30px;
          background: #f4f7fc;
          min-height: 100vh;
          font-family: Arial, sans-serif;
        }

        .page-title {
          margin-bottom: 20px;
          color: #1f2937;
        }

        .student-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 25px;
        }

        .student-card {
          background: white;
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          cursor: pointer;
          transition: 0.3s;
        }

        .student-card:hover {
          transform: translateY(-5px);
        }

        .profile-header {
          display: flex;
          align-items: center;
          gap: 20px;
          background: white;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          margin-bottom: 20px;
        }

        .avatar {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: #2563eb;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          font-weight: bold;
        }

        .badge {
          background: #22c55e;
          color: white;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 12px;
        }

        .profile-card {
          background: white;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          margin-bottom: 20px;
        }

        .info-grid,
        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 15px;
        }

        .form-grid input {
          padding: 12px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 14px;
        }

        .update-btn {
          margin-top: 20px;
          background: #2563eb;
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 15px;
        }

        .update-btn:hover {
          background: #1d4ed8;
        }
      `}</style>

      <div className="profile-container">
        <h1 className="page-title">Student Profiles</h1>

        <div className="student-grid">
          {students.map((s) => (
            <div
              key={s.id}
              className="student-card"
              onClick={() => setStudent(s)}
            >
              <h3>{s.name}</h3>
              <p>{s.course}</p>
              <span className="badge">Active Student</span>
            </div>
          ))}
        </div>

        <div className="profile-header">
          <div className="avatar">
            {student.name
              .split(" ")
              .map((word) => word[0])
              .join("")
              .toUpperCase()}
          </div>

          <div>
            <h2>{student.name}</h2>
            <p>{student.course}</p>
            <span className="badge">Active Student</span>
          </div>
        </div>

        <div className="profile-card">
          <h3>Profile Information</h3>

          <div className="info-grid">
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Phone:</strong> {student.phone}</p>
            <p><strong>Course:</strong> {student.course}</p>
            <p><strong>Semester:</strong> {student.semester}</p>
            <p><strong>Address:</strong> {student.address}</p>
          </div>
        </div>

        <div className="profile-card">
          <h3>Edit Profile</h3>

          <div className="form-grid">
            <input type="text" name="name" value={student.name} onChange={handleChange} />
            <input type="email" name="email" value={student.email} onChange={handleChange} />
            <input type="text" name="phone" value={student.phone} onChange={handleChange} />
            <input type="text" name="course" value={student.course} onChange={handleChange} />
            <input type="text" name="semester" value={student.semester} onChange={handleChange} />
            <input type="text" name="address" value={student.address} onChange={handleChange} />
          </div>

          <button className="update-btn">
            Update Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;

