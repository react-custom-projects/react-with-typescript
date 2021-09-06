import React, {FC} from 'react';
import {TodoProps} from "../interfaces/TodoInterface";

const Todo: FC<TodoProps> = ({title}) => {
    return (
        <li>{title}</li>
    );
};

export default Todo;
