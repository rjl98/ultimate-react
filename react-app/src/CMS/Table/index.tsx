import { userForm } from "../Schemas/user";

type Props = {
    users: userForm[];
    onClick: (index: number) => void;
};

function Table({ users, onClick }: Props) {
    return (
        <table className="table table-striped table-hover user-select-none">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Email</th>
                    <th scope="col">Tipo</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr
                        key={index}
                        onClick={() => onClick(index)}
                        role="button"
                    >
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.type}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
