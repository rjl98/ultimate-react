import { createContext, Dispatch } from "react";
import { Todo, TodoAction } from "./TodoProvider";

type TodoContextType = {
    todos: Todo[];
    dispatch: Dispatch<TodoAction>;
};
export default createContext<TodoContextType>({} as TodoContextType);
