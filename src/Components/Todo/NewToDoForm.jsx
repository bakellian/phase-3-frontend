import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


const NewToDoForm = ({ categories, addNewToDo }) => {
  
  const classes = useStyles();
  
    const [toDoData, setToDoData] = useState({
        title: "", 
        description: "",
        category: ""
    })

    //what is configObj doing???
    const configObj = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({toDoData}),
    };

    //think its not saving to backend because we need to post to "/categories/:category_id/todos"
    //throwing a 404 error - request doesnt exist 
    const handleSubmit = (e) => {
    e.preventDefault();
    // Make a POST request to create a new todo
        fetch("/categories/:category_id/todos", configObj)
        .then((resp) => resp.json())
        .then((todo) => {
            addNewToDo(todo);
        });
    };

    return (
    <div>
      <h3>Create a new todo:</h3>
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField 
          id="filled-basic" 
          label="Title" 
          variant="filled"
          value={toDoData.title}
          onChange={(e) => setToDoData({...toDoData, title: e.target.value})}
        />
        <TextField
          id="filled-basic" 
          label="Description" 
          variant="filled"
          value={toDoData.description}
          onChange={(e) => setToDoData({...toDoData, description: e.target.value})}
        />
        {/* <label htmlFor="amount">Title:</label>
        <input
          id="title"
          type="text"
          placeholder="title"
          name="title"
          value={toDoData.title}
          onChange={(e) => setToDoData({...toDoData, title: e.target.value})}
        /> */}
        {/* <label htmlFor="date">Description:</label>
        <input
          id="description_id"
          type="description"
          name="description"
          value={toDoData.description}
          onChange={(e) => setToDoData({...toDoData, description: e.target.value})}
        /> */}
        <label>
          Category:
          <select
            placeholder="Select Category"
            onChange={(e) => setToDoData({...toDoData, category: e.target.value})}
          >
            <option value="none">Select a category:</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        <Button variant="contained" color="primary" type="submit">Add todo</Button>
      </form>
    </div>
    );
  };


export default NewToDoForm;