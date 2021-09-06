import React from 'react';
//components
import Todos from "./components/Todos";

function App() {
    const items = [{id: 1, title: 'Learn React'}, {id: 2, title: 'Learn Typescript'}];

    return (
        <Todos items={items}/>
    );
}

export default App;
