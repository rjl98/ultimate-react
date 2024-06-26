import { ReactNode, useReducer } from "react";
import TodoContext from "./TodoContext";

export type Todo = {
    id: number;
    name: string;
};

type AddAction = {
    type: "ADD";
    todo: Todo;
};

type DeleteAction = {
    type: "DELETE";
    todoId: number;
};

export type TodoAction = AddAction | DeleteAction;

const todosReducer = (todos: Todo[], action: TodoAction) => {
    switch (action.type) {
        case "ADD":
            return [action.todo, ...todos];
        case "DELETE":
            return todos.filter((t) => t.id !== action.todoId);
    }
    return todos;
};

type Props = {
    children: ReactNode;
};

export default function TodoProvider({ children }: Props) {
    const [todos, dispatch] = useReducer(todosReducer, []);

    return (
        <TodoContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
}
