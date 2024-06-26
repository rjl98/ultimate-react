import { z } from "zod";

export const userOptions = ["Familiar", "Trabajo", "Amigo", "Otros"] as const;
export const userSchema = z.object({
    firstName: z
        .string()
        .min(1, { message: "Se requiere el nombre." })
        .min(3, { message: "Debe tener mas de 3 caracteres." })
        .max(12, { message: "Debe tener menos de 12 caracteres." })
        .regex(/(^[A-Za-z]+$)/, { message: "Nombre no valido" }),
    lastName: z
        .string()
        .min(1, { message: "Se requiere el apellido." })
        .min(3, { message: "El apellido debe tener mas de 3 caracteres." })
        .max(12, { message: "Debe tener menos de 12 caracteres." })
        .regex(/(^[A-Za-z]+$)/, { message: "Apellido no valido" }),
    email: z
        .string()
        .min(1, { message: "Se requiere el correo." })
        .email("El correo no es valido."),
    type: z.string().min(1, { message: "Seleccione una opción." }),
});

export type userForm = z.infer<typeof userSchema>;
