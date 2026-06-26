import StudentCard from "./StudentCard";
import { students } from "../data/students";

function StudentList() {
  return (
    <>
      <h2>Students</h2>

      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          course={student.course}
        />
      ))}
    </>
  );
}

export default StudentList;
