import React, { useEffect, useState } from "react";
import ToDoList from "./ToDoList";
import NewToDoForm from "./NewToDoForm"

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

    const addNewToDo = (toDo) => {
        setToDos([...ToDos, toDo]);
    };


    return (
        <div className="App">
            <ToDoList
                toDos={toDos} 
                deleteToDo={deleteToDo}
            />
            <NewToDoForm categories={categories} addNewToDo={addNewToDo} />
        </div>
    );
}

export default ToDos;