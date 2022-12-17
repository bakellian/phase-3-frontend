import React, { useState } from "react";
import EditToDo from "./EditToDo";

const ToDo = ({ toDo, deleteToDo, onUpdateToDo }) => {

    const { id, title, description, category_id } = toDo;
    const [isEditing, setIsEditing] = useState(false)

    const handleToDoUpdate = (updatedToDo) => {
        setIsEditing(false);
        onUpdateToDo(updatedToDo);
    }

    const handleDelete = () => {
        deleteToDo(id);
        fetch(`http://localhost:9292/todos/${id}`, {
          method: "DELETE",
        });
      };


    return(
        <div>
            {isEditing ? (
                <EditToDo 
                    toDo={toDo}
                    onUpdateToDo={handleToDoUpdate}
                />
            ) : (
            <li style={{ listStyleType: "none" }}>
                <p>
                    Title: {title}, Description: {description}, Category: {category_id}
                    <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
                        Edit
                    </button>
                    <button onClick={handleDelete}>Delete</button>
                </p>
            </li>
            )}
        </div>
    )
}

export default ToDo;