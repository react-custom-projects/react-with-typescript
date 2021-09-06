import React, {FC} from 'react';
//interfaces
import {Props} from "../interfaces/Todos";

const Todos: FC<Props> = ({ items}) => {
    return (
        <ul>
            {items.map((el) => <li key={el.id}>{el.title}</li>)}
        </ul>
    );
};

export default Todos;
