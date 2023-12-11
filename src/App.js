import { useEffect, useState } from "react";
import "./App.css";
import News from "./News";

function App() {
  let [articles, setArticles] = useState([]);

  let [category, setCategory] = useState("india");

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${category}&from=2023-12-10&apiKey=d843f1562e994dd584b111e7eee64744`
    )
      .then((response) => response.json())
      .then((news) => {
        setArticles(news.articles);
        console.log(news.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  return (
    <div>
      <header className="header">
        <h1>आज तक</h1>
        <input
          type="text"
          onChange={(event) => {
            if (event.target.value !== "") {
              setCategory(event.target.value);
            } else {
              setCategory("india");
            }
          }}
          placeholder="search news"
        />
      </header>
      <section className="news-articles">
        {articles.length !== 0 ? (
          articles.map((data, index) => {
            return <News article={data} key={index} />;
          })
        ) : (
          <h3>No News Found For Searched Text</h3>
        )}
      </section>
    </div>
  );
}

export default App;
