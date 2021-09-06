import {Item} from "./TodosInterface";

export interface TodoProps {
    item: Item,
    onDeleteTodo: (id: number) => void,
}
