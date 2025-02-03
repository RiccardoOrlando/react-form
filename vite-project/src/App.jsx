import { useState } from "react";

export default function App() {
  const [Articles, setArticlesName] = useState([
    "Libro",
    "Quaderno",
    "Foglio",
  ]);
  const [newArticles, setNewArticles] = useState('');

  const addArticles = (e) =>{
    e.preventDefault()
    setArticlesName([...Articles, newArticles]);
    setNewArticles(""); 
  }

  const removeArticle = (i) =>{
    const UpdatedArticleList = Articles.filter((Articles, index) => {
      return index !== i
    })
    setArticlesName(UpdatedArticleList)
  }

console.log(removeArticle)

  return (
    <>
      <form onSubmit={addArticles}>
        <ul>
          {Articles.map((Articles, i) =>(
            <li key={i}>
              {Articles}
              <button onClick={() => removeArticle(i)}>🗑</button>
            </li>
          ))
          }
        </ul>
        <input 
          type="text"
          value={newArticles}
          onChange={e => {setNewArticles(e.target.value)}}
          />
        <button>Aggiungi Articolo</button>
      </form>
    </>
  );
}
