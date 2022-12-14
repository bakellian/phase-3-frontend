import React, { useState } from "react";

const NewToDoForm = ({ categories, addNewToDo }) => {

    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    // const [category, setCategory] = useState("")

    const [toDoData, setToDoData] = useState({
        title: "", 
        description: "",
        category: ""
    })

    //what is configObj doing???
    const configObj = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({toDoData}),
    };


    const handleSubmit = (e) => {
    e.preventDefault();
    // Make a POST request to create a new donation
        fetch("http://localhost:9292/todos", configObj)
        .then((resp) => resp.json())
        .then((todo) => {
            addNewToDo(todo);
        });
    };

    return (
    <div>
      <h3>Create a new todo:</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">Title:</label>
        <input
          id="title"
          type="text"
          placeholder="title"
          name="title"
          value={toDoData.title}
          onChange={(e) => setToDoData({...toDoData, title: e.target.value})}
        />
        <label htmlFor="date">Description:</label>
        <input
          id="description_id"
          type="description"
          name="description"
          value={toDoData.description}
          onChange={(e) => setToDoData({...toDoData, description: e.target.value})}
        />
        <label>
          Category:
          <select
            placeholder="Select Category"
            onChange={(e) => setToDoData({...toDoData, category: e.target.value})}
          >
            <option value="none">Select a category:</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Add todo</button>
      </form>
    </div>
    );
};


export default NewToDoForm;