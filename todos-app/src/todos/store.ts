import { create } from "zustand";

export type Todo = {
    id: number;
    name: string;
};

type TodosStore = {
    todos: Todo[];
    add: (todo: Todo) => void;
    destroy: (id: number) => void;
    update: (newTodo: Todo) => void;
    total: number;
};

const useTodosStore = create<TodosStore>((set) => ({
    todos: [],
    total: 0,
    add: (todo) => set((state) => ({ todos: [todo, ...state.todos] })),
    destroy: (id) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        })),
    update: (newTodo) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === newTodo.id ? newTodo : todo
            ),
        })),
}));

export default useTodosStore;
