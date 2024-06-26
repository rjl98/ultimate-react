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

export default (todos: Todo[], action: TodoAction) => {
    switch (action.type) {
        case "ADD":
            return [action.todo, ...todos];
        case "DELETE":
            return todos.filter((t) => t.id !== action.todoId);
    }
    return todos;
};
