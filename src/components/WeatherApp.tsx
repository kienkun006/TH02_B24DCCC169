import React, { useState } from "react";
import axios from "axios";

const weatherApp: React.FC = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);

  const getWeather = async () => {
    if (!city.trim()) return;
    try {
      const res = await axios.get(`https://wttr.in/${city}?format=j1`);
      setWeather(res.data);
    } catch (error) {
      alert("Không tìm thấy thành phố!");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>🌤 Ứng dụng Thời tiết</h2>
      <input
        type="text"
        placeholder="Nhập tên thành phố"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Xem thời tiết</button>

      {weather && (
        <div style={{ marginTop: 20 }}>
          <h3>{city}</h3>
          <p>Nhiệt độ: {weather.current_condition[0].temp_C}°C</p>
          <p>Tình trạng: {weather.current_condition[0].weatherDesc[0].value}</p>
        </div>
      )}
    </div>
  );
};

export default weatherApp;
