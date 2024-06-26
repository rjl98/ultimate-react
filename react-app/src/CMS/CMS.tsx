import { useState } from "react";
import Form from "./Form";
import Table from "./Table";
import Button from "./Button";
import { userForm } from "./Schemas/user";

function CMS() {
    const [users, setUsers] = useState<userForm[]>([
        {
            firstName: "Maria",
            lastName: "Soto",
            email: "noreply@cia.io",
            type: "Familiar",
        },
        {
            firstName: "Felipe",
            lastName: "Schurmann",
            email: "noreply@familia.io",
            type: "Trabajo",
        },
        {
            firstName: "Nicolas",
            lastName: "Schurmann",
            email: "noreply@holamundo.io",
            type: "Amigo",
        },
    ]);

    const addUser = (data: userForm) => setUsers([...users, data]);

    const removeUser = (index: number) => {
        const currentUsers = [...users];
        currentUsers.splice(index, 1);
        setUsers(currentUsers);
    };

    return (
        <div className="container">
            <Form onSubmit={addUser}>
                <Button>Enviar</Button>
                <Button onClick={resetForm} variant="secondary">
                    Limpiar
                </Button>
            </Form>

            <Table users={users} onClick={removeUser} />
        </div>
    );
}

export default CMS;
