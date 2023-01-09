import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));


const NewToDoForm = ({ categories, addNewToDo }) => {
  
  const classes = useStyles();
  
    const [toDoData, setToDoData] = useState({
        title: "", 
        description: "",
    })

    const [category_id, setCategoryId] = useState(null)

    const configObj = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ toDoData }),
    };

    const handleSubmit = (e) => {
      e.preventDefault();
        fetch(`http://localhost:9292/categories/${category_id}/todos`, configObj)
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
        {/* <label>
          Category:
          <select
            placeholder="Select Category"
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option value="none">Select a category:</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label> */}
        <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          onChange={(e) => setCategoryId(e.target.value)}
        >
          {categories.map((category) => (
              <option key={category.id} value={category.id}>
                <MenuItem>{category.name}</MenuItem>
              </option>
            ))}
      
        </Select>
      </FormControl>
        <Button variant="contained" color="primary" type="submit">Add todo</Button>
      </form>
    </div>
    );
  };


export default NewToDoForm;