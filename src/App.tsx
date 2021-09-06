import React from 'react';
//components
import Todos from "./components/Todos";

function App() {
    return (
        <Todos items={['Learn React', 'Learn Typescript']}/>
    );
}

export default App;
