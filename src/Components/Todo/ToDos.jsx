import React, { useEffect, useState } from "react";
import ToDoList from "./ToDoList";

const ToDos = ({ categories }) => {

    const [toDos, setToDos] = useState([]);

    //  make get request for all toDos
    useEffect(() => {
        fetch("http://localhost:9292/todos")
          .then((resp) => resp.json())
          .then((todos) => setToDos(todos));
      }, []);

      const deleteToDo = (id) => {
        const updatedToDos = toDos.filter((toDo) => toDo.id !== id);
        setToDos(updatedToDos);
      }


      return (
        <div className="App">
            <ToDoList
                toDos={toDos} 
                deleteToDo={deleteToDo}
            />
        </div>
      );
}

export default ToDos;