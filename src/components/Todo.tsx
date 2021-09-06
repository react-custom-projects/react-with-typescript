import React, {FC} from 'react';
//interfaces
import {TodoProps} from "../interfaces/TodoInterface";

const Todo: FC<TodoProps> = ({title}) => <li>{title}</li>;

export default Todo;
