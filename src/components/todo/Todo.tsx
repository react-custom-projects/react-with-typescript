import React, {FC} from 'react';
//interfaces
import {TodoProps} from "../../interfaces/TodoInterface";
//styles
import classes from './Todo.module.css';

const Todo: FC<TodoProps> = ({item, onDeleteTodo}) => (
    <li className={classes.item}
        onClick={() => onDeleteTodo(item.id)}>
        {item.title}
    </li>
);

export default Todo;
