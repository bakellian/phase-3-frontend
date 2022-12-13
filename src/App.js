import React, { useEffect, useState } from "react";
import ToDos from "./Components/Todo/ToDos"

const App = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/categories")
      .then((r) => r.json())
      .then((categories) => setCategories(categories));
  }, []);

  return (
    <div className="App">
      <h1>I am the App</h1>
      <h1 style={{textAlign: 'center'}}>To Do</h1>
      <ToDos categories={categories}/>
    </div>
  );
}

export default App;
