import React, {FC} from 'react';

const Todos: FC<{ items: string[] }> = ({children, items}) => {
    return (
        <ul>
            {items.map((el, i) => <li key={i}>{el}</li>)}
        </ul>
    );
};

export default Todos;
