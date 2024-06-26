import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, userForm, userOptions } from "../Schemas/user";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    onSubmit: (data: userForm) => void;
    onClick: () => void;
};

function Form({ children, onSubmit }: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<userForm>({
        resolver: zodResolver(userSchema),
    });

    const submitForm = handleSubmit((data: userForm) => {
        console.log(data);
        onSubmit(data);
    });

    return (
        <div>
            <form onSubmit={submitForm}>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                        Nombre
                    </label>
                    <input
                        {...register("firstName")}
                        type="text"
                        className="form-control"
                        id="firstName"
                    />
                    {errors?.firstName?.message && (
                        <p className="text-danger">
                            {errors?.firstName?.message}
                        </p>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                        Apellido
                    </label>
                    <input
                        {...register("lastName")}
                        type="text"
                        className="form-control"
                        id="lastName"
                    />
                    {errors?.lastName?.message && (
                        <p className="text-danger">
                            {errors?.lastName?.message}
                        </p>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        {...register("email")}
                        type="text"
                        className="form-control"
                        id="email"
                    />
                    {errors?.email?.message && (
                        <p className="text-danger">{errors?.email?.message}</p>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="type" className="form-label">
                        Tipo
                    </label>
                    <select {...register("type")} className="form-select">
                        <option value="">-- Seleccione tipo --</option>
                        {userOptions.map((o) => (
                            <option key={o} value={o}>
                                {o}
                            </option>
                        ))}
                        ;
                    </select>
                    {errors?.type?.message && (
                        <div className="text-danger">
                            {errors?.type?.message}
                        </div>
                    )}
                </div>
                <br />
                {children}
            </form>
        </div>
    );
}

export default Form;
