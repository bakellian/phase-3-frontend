import React, { useState } from "react";

const EditToDo = ({ toDo, onUpdateToDo }) => {
    
    const { id, title, description } = toDo;

    const [updatedTitle, setUpdatedTitle] = useState(title);
    const [updatedDescription, setUpdatedDescription] = useState(description)

    function handleEditForm(e) {
        e.preventDefault();

        //make a patch request to update a single todo
        fetch(`http://localhost:9292/todos/${id}/edit`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: updatedTitle, description: updatedDescription}),
        })
            .then((resp) => resp.json())
            .then((updatedToDo) => onUpdateToDo(updatedToDo));
    }

    return (
        <form onSubmit={handleEditForm}>
          <label htmlFor="date">Title:</label>
            <input
                id="title"
                type="text"
                name="title"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
            />
          <label htmlFor="date">Description:</label>
            <input
                id="description"
                type="text"
                name="description"
                value={updatedDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)}
            />
          <input type="submit" value="Save" />
        </form>
      );
    
}

export default EditToDo;