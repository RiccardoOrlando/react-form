import { useState } from "react";

export default function App() {
  const [Articles, setArticlesName] = useState(["Libro", "Quaderno", "Foglio"]);
  const [newArticles, setNewArticles] = useState("");

  const addArticles = (e) => {
    e.preventDefault();
    setArticlesName([...Articles, newArticles]);
    setNewArticles("");
  };

  const removeArticle = (i) => {
    const UpdatedArticleList = Articles.filter((Article, index) => {
      return index !== i;
    });
    setArticlesName(UpdatedArticleList);
  };

  return (
    <>
      <ul>
        {Articles.map((Article, i) => (
          <li key={i}>
            {Article}{" "}
            <button type="button" onClick={() => removeArticle(i)}>
              🗑
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={addArticles}>
        <input
          type="text"
          value={newArticles}
          onChange={(e) => {
            setNewArticles(e.target.value);
          }}
        />
        <button type="submit">Aggiungi Articolo</button>
      </form>
    </>
  );
}
        