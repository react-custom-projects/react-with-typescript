import React, {FC, FormEvent, useRef} from 'react';
//interfaces
import {NewTodoInterface} from "../interfaces/NewTodoInterface";

const NewTodo: FC<NewTodoInterface> = ({onAddTodo}) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        const enteredText = todoTextInputRef.current?.value;

        if (!enteredText || enteredText.trim().length === 0) {
            return;
        }

        onAddTodo(enteredText);
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor='todoText'>Todo text</label>
            <input type='text' id='todoText' ref={todoTextInputRef}/>
            <button>Add</button>
        </form>
    );
};

export default NewTodo;
