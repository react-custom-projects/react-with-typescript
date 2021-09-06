import React, {FC} from 'react';
//interfaces
import {TodosProps} from "../../interfaces/TodosInterface";
import Todo from "../todo/Todo";
//styles
import classes from './Todos.module.css';

const Todos: FC<TodosProps> = ({items, onDeleteTodo}) => (
    <ul className={classes.todos}>
        {items.map((el) => <Todo key={el.id}
                                 item={el}
                                 onDeleteTodo={onDeleteTodo}/>
        )}
    </ul>
);

export default Todos;
