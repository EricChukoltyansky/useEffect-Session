import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [randomJoke, setJoke] = useState("");
  const [categories, setCategories] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleRandomJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.value);
      });
  };

  const onCategoriesSubmit = () => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  };

  const getJokeFromCategories = (category) => {
    fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.value);
      });
  };

  useEffect(() => {
    // const onSearchSubmit = () => {
    //   if (searchInput) {
    //     const searchQuery = searchInput;
    //     fetch(`https://api.chucknorris.io/jokes/search?query=${searchQuery}`)
    //       .then((response) => response.json())
    //       .then((data) => {
    //         setJoke(data.result[0].value);
    //       });
    //   }
    // };
    // onSearchSubmit();

    if (searchInput) {
      const debounce = setTimeout(() => {
        fetch(`https://api.chucknorris.io/jokes/search?query=${searchInput}`)
          .then((response) => response.json())
          .then((data) => {
            setJoke(data?.result[0]?.value);
          });
      }, 2000);

      return () => {
        clearTimeout(debounce);
      };
    }
  }, [searchInput]);

  return (
    <div className="App">
      <button onClick={handleRandomJoke}>Get Random Joke</button>
      <button onClick={onCategoriesSubmit}>Get Categories</button>
      {categories.length > 0 &&
        categories.map((category) => (
          <div
            key={category}
            onClick={(e) => getJokeFromCategories(e.target.textContent)}
            style={{ cursor: "pointer" }}
          >
            {category}
          </div>
        ))}
      <input onChange={(e) => setSearchInput(e.target.value)} />
      {randomJoke ? <h1>{randomJoke}</h1> : <h1>Spinner</h1>}
    </div>
  );
};

export default App;
