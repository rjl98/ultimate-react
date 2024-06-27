import useTodosStore from "../todos/store";

function MainContent() {
    const { todos, add, destroy, update } = useTodosStore();
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
                        <button
                            onClick={() => {
                                update({
                                    id: t.id,
                                    name: `Se actualizo el usuario ${t.id}`,
                                });
                            }}
                        >
                            Actualizar
                        </button>
                        {t.name}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default MainContent;
