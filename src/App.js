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
    <div className="container">
      <h1>To Do</h1>
      <ToDos categories={categories}/>
    </div>
  );
}

export default App;
