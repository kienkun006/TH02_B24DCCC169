import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home.tsx"; 
import WeatherApp from "../components/WeatherApp.tsx";
import StudentList from "../components/StudentList.tsx";
import NewsApp from "../components/NewsApp.tsx";
import StudentDetail from "../components/StudentDetail.tsx";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Bài thực hành 02 - React TypeScript</h1>

        <nav style={{ marginBottom: "20px" }}>
          <Link to="/">Trang chủ</Link> |{" "}
          <Link to="/weather">Bài 1: Thời tiết</Link> |{" "}
          <Link to="/students">Bài 2: Sinh viên</Link> |{" "}
          <Link to="/news">Bài 3: Tin tức</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<WeatherApp />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/news" element={<NewsApp />} />
           <Route path="/students/:id" element={<StudentDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;
