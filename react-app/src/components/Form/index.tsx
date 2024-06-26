// import { FormEvent, useState } from "react";

// function Form() {
//     // const firstNameRef = useRef<HTMLInputElement>(null);
//     // const lastNameRef = useRef<HTMLInputElement>(null);
//     const [user, setUser] = useState({ firstName: "", lastName: "" });
//     const handleSubmit = (event: FormEvent) => {
//         event.preventDefault();
//         // const user = {
//         //     firstName: firstNameRef.current?.value,
//         //     lastName: lastNameRef.current?.value,
//         // };
//         console.log(user);
//     };
//     return (
//         // form>div.mb-3*2>label.form-label+input#name.form-control
//         <form onSubmit={handleSubmit} action="">
//             <div className="mb-3">
//                 <label htmlFor="firstName" className="form-label">
//                     Nombre
//                 </label>
//                 <input
//                     // ref={firstNameRef}
//                     value={user.firstName}
//                     onChange={(e) =>
//                         setUser({ ...user, firstName: e.target.value })
//                     }
//                     type="text"
//                     id="name"
//                     className="form-control"
//                 />
//             </div>
//             <div className="mb-3">
//                 <label htmlFor="lastName" className="form-label">
//                     Apellido
//                 </label>
//                 <input
//                     // ref={lastNameRef}
//                     value={user.lastName}
//                     onChange={(e) =>
//                         setUser({ ...user, lastName: e.target.value })
//                     }
//                     type="text"
//                     id="name"
//                     className="form-control"
//                 />
//             </div>
//             <button className="btn btn-primary">Enviar</button>
//         </form>
//     );
// }
// export default Form;

// import { useForm } from "react-hook-form";

// type Form = {
//     firstName: string;
//     lastName: string;
// };
// const Form = () => {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm<Form>();
//     const onSubmit = (data: Form) => console.log(data);
//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="mb-3">
//                 <label htmlFor="firstName" className="form-label">
//                     Nombre
//                 </label>
//                 <input
//                     {...register("firstName", {
//                         validate: (valor) =>
//                             valor.length < 4 ? "Largo mínimo: 3" : true,
//                     })}
//                     type="text"
//                     id="firstName"
//                     className="form-control"
//                 />
//                 {errors?.firstName && <p>{errors?.firstName?.message}</p>}
//             </div>
//             <div className="mb-3">
//                 <label htmlFor="lastName" className="form-label">
//                     Apellido
//                 </label>
//                 <input
//                     {...register("lastName")}
//                     type="text"
//                     id="lastName"
//                     className="form-control"
//                 />
//             </div>
//             <button className="btn btn-primary">Enviar</button>
//         </form>
//     );
// };

// export default Form;

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, userForm } from "../../schemas/user";

function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<userForm>({
        resolver: zodResolver(userSchema),
    });
    console.log(errors);

    const onSubmit = (data: userForm) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                    Nombre
                </label>
                <input
                    {...register("firstName")}
                    type="text"
                    id="firstName"
                    className="form-control"
                />
                {errors?.firstName?.message && (
                    <p className="text-danger">{errors?.firstName?.message}</p>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                    Apellido
                </label>
                <input
                    {...register("lastName")}
                    type="text"
                    id="lastName"
                    className="form-control"
                />
                {errors?.lastName?.message && (
                    <p className="text-danger">{errors?.lastName?.message}</p>
                )}
            </div>
            <button className="btn btn-primary">Enviar</button>
        </form>
    );
}

export default Form;
