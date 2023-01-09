import React, { useEffect, useState } from "react";
import ToDo from "./ToDo";

const ToDoList = ({ toDos, deleteToDo, onUpdateToDo, categories }) => {
    return (
        <div>
            <h3>Your To Dos:</h3>
            {toDos.map((toDo) => (
        <ToDo
          key={toDo.id}
          toDo={toDo}
          cateogires={categories}
          deleteToDo={deleteToDo}
          onUpdateToDo={onUpdateToDo}
        />
      ))}
    </div>
    );
}


export default ToDoList;