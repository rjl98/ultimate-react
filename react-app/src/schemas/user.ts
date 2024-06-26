import { z } from "zod";

export const userSchema = z.object({
    firstName: z
        .string()
        .min(1, { message: "Campo requerido" })
        .min(3, { message: "Longitud minima: 3" }),
    lastName: z
        .string()
        .min(1, { message: "Campo requerido" })
        .min(3, { message: "Longitud minima: 3" }),
});

export type userForm = z.infer<typeof userSchema>;
