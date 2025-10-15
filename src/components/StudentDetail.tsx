import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

const StudentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [student, setStudent] = useState<Student | null>(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setStudent(res.data))
      .catch(() => alert("Không tìm thấy sinh viên"));
  }, [id]);

  if (!student) return <p>Đang tải...</p>;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{student.name}</h2>
      <p>Email: {student.email}</p>
      <p>Phone: {student.phone}</p>
      <p>Website: {student.website}</p>
    </div>
  );
};

export default StudentDetail;
