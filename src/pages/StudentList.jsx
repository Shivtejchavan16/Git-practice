const StudentList = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Student List</h1>

      <input
        type="text"
        placeholder="Search student..."
        className="border p-2 mb-3"
      />

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Rahul</td>
            <td>rahul@gmail.com</td>
            <td>React</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;