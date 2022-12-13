import React, { useState } from "react";


// t.string :title 
// t.text :description 
// t.integer :category_id

const NewToDoForm = ({ categories, addNewToDo }) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("")


    // Make a POST request to create a new todo
    fetch("http://localhost:9292/todos")
      .then((resp) => resp.json())
      .then((toDo) => {
        addNewToDo(toDo);
    });
};


export default NewToDoForm;