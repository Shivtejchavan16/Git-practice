const StudentCard = ({ student }) => {
  return (
    <div className="card">
      <h3>{student.name}</h3>
      <p>Roll No: {student.roll}</p>
      <p>Class: {student.className}</p>
    </div>
  );
};

export default StudentCard;