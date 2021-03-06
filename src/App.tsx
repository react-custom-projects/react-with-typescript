import React, {useState} from 'react';
//interfaces
import {Item} from "./interfaces/TodosInterface";
//components
import Todos from "./components/todos/Todos";
import NewTodo from "./components/newTodo/NewTodo";

function App() {
    const [items, setItems] = useState<Item[]>([]);

    const onAddTodo = (text: string) => {
        const newItem = {id: new Date().getMilliseconds(), title: text};
        setItems(prev => prev.concat(newItem));
    };

    const onDeleteTodo = (id: number) => {
        setItems(prev => prev.filter(el => el.id !== id));
    }

    return (
        <>
            <NewTodo onAddTodo={onAddTodo}/>
            <Todos items={items} onDeleteTodo={onDeleteTodo}/>
        </>
    );
}

export default App;
