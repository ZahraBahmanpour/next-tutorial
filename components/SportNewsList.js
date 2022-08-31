import { useEffect, useState } from "react";

export default function SportNewsList() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:4000/news?category=sports"
      );
      const news = await response.json();
      setNews(news);
    };
    fetchData();
  }, []);
  return (
    <ul>
      {news.map((n) => (
        <li key={n.id}>
          {n.title} {n.description}
        </li>
      ))}
    </ul>
  );
}
