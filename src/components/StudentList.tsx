import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Routes, Route } from "react-router-dom";

interface Student {
  id: number;
  name: string;
  email: string;
}

const StudentList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setStudents(res.data))
      .catch(() => alert("Lỗi khi tải dữ liệu!"));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>👨‍🎓 Danh sách sinh viên</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {students.map(stu => (
          <li key={stu.id}>
            <Link to={`/students/${stu.id}`}>{stu.name}</Link> ({stu.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;

