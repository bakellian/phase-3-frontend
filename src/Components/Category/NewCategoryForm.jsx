import React, { useEffect, useState } from "react";
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


const NewCategoryForm = () => {
  
  const classes = useStyles();

      //  make get request for all categories
    useEffect(() => {
        fetch("http://localhost:9292/categories")
          .then((resp) => resp.json())
          .then((categories) => setCategoryData(categories));
    }, []);
  
    const [categoryData, setCategoryData] = useState({
        name: ""
    })


    const addNewCategory = (category) => {
        setCategoryData([...categoryData, category]);
    };


    const configObj = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoryData }),
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    // Make a POST request to create a new todo
        fetch("http://localhost:9292/categories", configObj)
        .then((resp) => resp.json())
        .then((category) => {
            addNewCategory(category);
        });
    };

    return (
    <div>
      <h3>Create a new cateogry:</h3>
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField 
          id="filled-basic" 
          label="Title" 
          variant="filled"
          value={categoryData.name}
          onChange={(e) => setCategoryData({...categoryData, category: e.target.value})}
        />
        
        <Button variant="contained" color="primary" type="submit">Add Category</Button>
      </form>
    </div>
    );
  };


export default NewCategoryForm;