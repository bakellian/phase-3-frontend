import React, { useState } from "react";
import EditToDo from "./EditToDo";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
        width: '200px',
      },
    },
}));

const ToDo = ({ toDo, categories, deleteToDo, onUpdateToDo }) => {

    const classes = useStyles();

    const { id, title, description, category_id } = toDo;
    const [isEditing, setIsEditing] = useState(false)

    const handleToDoUpdate = (updatedToDo) => {
        setIsEditing(false);
        onUpdateToDo(updatedToDo);
    }

    const handleDelete = () => {
        deleteToDo(id);
        fetch(`http://localhost:9292/todos/${id}`, {
          method: "DELETE",
        });
    };

    return(
        <div className={classes.root}>
            {isEditing ? (
                <EditToDo 
                    toDo={toDo}
                    onUpdateToDo={handleToDoUpdate}
                />
            ) : (
            <li style={{ listStyleType: "none" }} className={classes.root}>
                <h3>{title}</h3>
                <p>{description}</p>
                    <Button variant="contained" disableElevation onClick={() => setIsEditing((isEditing) => !isEditing)}>
                        Edit
                    </Button>
                    <Button variant="outlined" color="primary" onClick={handleDelete}>
                        Delete
                    </Button>
                    <Divider light />
            </li>
            )}
        </div>
    )
}

export default ToDo;