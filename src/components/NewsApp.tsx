import React, { useEffect, useState } from "react";
import axios from "axios";

interface Article {
  id: number;
  title: string;
  summary: string;
  image_url: string;
  url: string;
  published_at: string;
}

const NewsApp: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios.get("https://api.spaceflightnewsapi.net/v4/articles?limit=10")
      .then(res => setArticles(res.data.results))
      .catch(() => alert("Không tải được tin tức!"));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>📰 Tin tức vũ trụ</h2>
      {articles.map(article => (
        <div key={article.id} style={{ margin: "20px", borderBottom: "1px solid #ccc" }}>
          <img src={article.image_url} alt={article.title} width="300" />
          <h3>{article.title}</h3>
          <p>{article.summary}</p>
          <a href={article.url} target="_blank" rel="noreferrer">Đọc thêm</a>
          <p><i>Ngày đăng: {new Date(article.published_at).toLocaleDateString()}</i></p>
        </div>
      ))}
    </div>
  );
};

export default NewsApp;
