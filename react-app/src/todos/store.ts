import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

export type Todo = {
    id: number;
    name: string;
};

type TodosStore = {
    todos: Todo[];
    add: (todo: Todo) => void;
    destroy: (id: number) => void;
};

const useTodosStore = create<TodosStore>((set) => ({
    todos: [],
    add: (todo) => set((state) => ({ todos: [todo, ...state.todos] })),
    destroy: (id) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        })),
}));

if (process.env.NODE_ENV == "development") {
    mountStoreDevtool("Todos Store", useTodosStore);
}

export default useTodosStore;
