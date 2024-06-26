import useTodosStore from "../todos/store";

function MainScreen() {
    const { todos, add, destroy } = useTodosStore();
    return (
        <>
            <h1>Hola Mundo</h1>
            <button
                onClick={() => {
                    const id = Math.random();
                    add({
                        id,
                        name: `Hola Mundo ${id}`,
                    });
                }}
            >
                Agregar
            </button>
            <ul>
                {todos.map((t) => (
                    <li key={t.id}>
                        <button onClick={() => destroy(t.id)}>Eliminar</button>
                        {t.name}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default MainScreen;
