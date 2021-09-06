import React, {FC} from 'react';
//interfaces
import {TodosProps} from "../interfaces/TodosInterface";
import Todo from "./Todo";

const Todos: FC<TodosProps> = ({ items}) => {
    return (
        <ul>
            {items.map((el) => <Todo key={el.id} title={el.title} />)}
        </ul>
    );
};

export default Todos;
