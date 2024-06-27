import useTodosStore from "../todos/store";

function Header() {
    const { todos } = useTodosStore();
    return <div>{todos.length}</div>;
}

export default Header;
