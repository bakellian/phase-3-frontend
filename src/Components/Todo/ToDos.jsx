import React, { useEffect, useState } from "react";

const ToDos = ({ categories }) => {

    const [toDos, setToDos] = useState([]);

    //  make get request for all toDos
    useEffect(() => {
        fetch("http://localhost:9292/todos")
          .then((resp) => resp.json())
          .then((todos) => setToDos(todos));
      }, []);
}

export default ToDos;