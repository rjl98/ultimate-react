import TodoList from "./TodoList";

function MainContent() {
    console.log("MainContent");
    return (
        <div>
            <h2>Todos</h2>
            <TodoList />
        </div>
    );
}

export default MainContent;
