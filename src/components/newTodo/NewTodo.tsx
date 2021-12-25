import React, {ChangeEvent, FC, FormEvent, useRef} from 'react';
//interfaces
import {NewTodoInterface} from "../../interfaces/NewTodoInterface";
//styles
import classes from './NewTodo.module.css';

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

    const nameHandler = ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
        console.log(value);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <label htmlFor='todoText'>Todo text</label>
            <input type='text' onChange={nameHandler} id='todoText' ref={todoTextInputRef}/>
            <button>Add</button>
        </form>
    );
};

export default NewTodo;
