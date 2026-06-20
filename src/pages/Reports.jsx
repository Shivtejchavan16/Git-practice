const reportsData = [
  {
    id: 1,
    title: "Student Performance Report",
    description: "View academic performance of students.",
    date: "20 June 2026",
  },
  {
    id: 2,
    title: "Attendance Report",
    description: "Monthly attendance summary report.",
    date: "18 June 2026",
  },
  {
    id: 3,
    title: "Course Completion Report",
    description: "Track course completion status.",
    date: "15 June 2026",
  },
  {
    id: 4,
    title: "Exam Result Report",
    description: "Detailed examination result report.",
    date: "10 June 2026",
  },
  {
  id: 5,
  title: "Fee Collection Report",
  description: "Track student fee payments and pending dues.",
  date: "08 June 2026",
},
{
  id: 6,
  title: "Faculty Performance Report",
  description: "Analyze faculty activities and performance metrics.",
  date: "05 June 2026",
},
{
  id: 7,
  title: "Library Usage Report",
  description: "View library book issue and return statistics.",
  date: "02 June 2026",
},
{
  id: 8,
  title: "Student Enrollment Report",
  description: "Summary of newly enrolled students and courses.",
  date: "30 May 2026",
},
{
  id: 9,
  title: "Placement Report",
  description: "Details of student placements and recruitment drives.",
  date: "27 May 2026",
},
{
  id: 10,
  title: "Department Activity Report",
  description: "Overview of departmental events and activities.",
  date: "25 May 2026",
}
];

const Reports = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "#f4f6f9",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#333",
        }}
      >
        Reports Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {reportsData.map((report) => (
          <div
            key={report.id}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{report.title}</h3>

            <p style={{ color: "#666" }}>{report.description}</p>

            <p>
              <strong>Date:</strong> {report.date}
            </p>

            <button
              style={{
                width: "100%",
                padding: "10px",
                background: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Download Report
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;