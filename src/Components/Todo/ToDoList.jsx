import React, { useEffect, useState } from "react";
import ToDo from "./ToDo";

const ToDoList = ({ toDos, deleteToDo }) => {
    return (
        <div>
            <h3>Your To Dos:</h3>
            {toDos.map((toDo) => (
        <ToDo
          key={toDo.id}
          toDo={toDo}
          deleteToDo={deleteToDo}
        />
      ))}
    </div>
    );
}


export default ToDoList;