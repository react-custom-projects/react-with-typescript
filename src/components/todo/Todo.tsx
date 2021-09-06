import React, {FC} from 'react';
//interfaces
import {TodoProps} from "../../interfaces/TodoInterface";
//styles
import classes from './Todo.module.css';

const Todo: FC<TodoProps> = ({title}) => <li className={classes.item}>{title}</li>;

export default Todo;
