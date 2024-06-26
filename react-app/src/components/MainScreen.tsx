import useTodo from "../todos/useTodo";

function MainScreen() {
    const { todos, dispatch } = useTodo();
    return (
        <>
            <h1>Hola Mundo</h1>
            <button
                onClick={() => {
                    const id = Math.random();
                    dispatch({
                        type: "ADD",
                        todo: {
                            id,
                            name: `Hola Mundo ${id}`,
                        },
                    });
                }}
            >
                Agregar
            </button>
            <ul>
                {todos.map((t) => (
                    <li key={t.id}>
                        <button
                            onClick={() =>
                                dispatch({
                                    type: "DELETE",
                                    todoId: t.id,
                                })
                            }
                        >
                            Eliminar
                        </button>
                        {t.name}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default MainScreen;
