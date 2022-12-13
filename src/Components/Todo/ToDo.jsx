import React, { useState } from "react";

const ToDo = ({ toDo, deleteToDo }) => {

    const { id, description, category_id, } = toDo;

    const handleDelete = () => {
        deleteToDo(id);
        fetch(`http://localhost:9292/todos/${id}`, {
          method: "DELETE",
        });
      };


    return(
        <div>
            <li>
                <p>
                    Description: {description}, Category: {category_id}
                    <button onClick={handleDelete}>Delete</button>
                </p>
            </li>
        </div>
    )
}

export default ToDo;