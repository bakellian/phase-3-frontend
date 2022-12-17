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

    // spreding the todos and adding my new todo to the end. 
    const addNewToDo = (toDo) => {
        setToDos([...ToDos, toDo]);
    };

    const handleUpdateToDo = (updatedToDo) => {
        const updatedToDos = toDos.map((todo) => {
            if (todo.id === updatedToDo.id) {
                return updatedToDo;
            } else {
                return todo;
            }
        });
        setToDos(updatedToDos)
    }


    return (
        <div className="App">
            <ToDoList
                toDos={toDos} 
                deleteToDo={deleteToDo}
                onUpdateToDo={handleUpdateToDo}
            />
            <NewToDoForm categories={categories} addNewToDo={addNewToDo} />
        </div>
    );
}

export default ToDos;