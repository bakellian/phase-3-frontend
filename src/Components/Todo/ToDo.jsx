import React, { useState } from "react";

const ToDo = ({ toDo, deleteToDo }) => {

    const { id, description, category_id, } = toDo;



    return(
        <div>
            <li>
                <p>
                    Description: {description}, Category: {category_id}
                </p>
            </li>
        </div>
    )
}

export default ToDo;