export type Item = {
    id: number,
    title: string,
};

export interface TodosProps {
    items: Item[],
    onDeleteTodo: (id: number) => void,
}
