import React, { useState } from "react";

const NewToDoForm = ({ categories, addNewToDo }) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("")


    const handleSubmit = (e) => {
    e.preventDefault();
    // Make a POST request to create a new donation
        fetch("http://localhost:9292/todos")
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="date">Description:</label>
        <input
          id="description_id"
          type="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>
          Category:
          <select
            placeholder="Select Category"
            onChange={(e) => setCategory(e.target.value)}
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