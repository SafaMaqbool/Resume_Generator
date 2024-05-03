import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email({
        message: "The entered email is invalid"
    }),
    password: z.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm, {
        message: "Password must contain atleast 8 alpha-numeric characters, capital and small letters and special characters"
    })
})

export const registerSchema = z.object({
    username: z.string().min(2, {
        message: "Username should have atleast 2 characters"
    }),
    email: z.string().email({
        message: "The entered email is invalid"
    }),
    password: z.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm, {
        message: "Password must contain atleast 8 alpha-numeric characters, capital and small letters and special characters"
    }),
    userAgreement: z.boolean()
})