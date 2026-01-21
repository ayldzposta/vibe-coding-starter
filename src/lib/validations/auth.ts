import { z } from "zod";

export const loginSchema = z.object({
    email: z
        .string()
        .min(1, "E-posta gereklidir")
        .email("Geçerli bir e-posta adresi giriniz"),
    password: z
        .string()
        .min(1, "Şifre gereklidir")
        .min(8, "Şifre en az 8 karakter olmalıdır")
        .max(100, "Şifre çok uzun"),
});

export const registerSchema = z.object({
    name: z.string().min(2, "İsim en az 2 karakter olmalıdır").optional(),
    email: z
        .string()
        .min(1, "E-posta gereklidir")
        .email("Geçerli bir e-posta adresi giriniz"),
    password: z
        .string()
        .min(8, "Şifre en az 8 karakter olmalıdır")
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
            "Şifre en az bir büyük harf, bir küçük harf ve bir rakam içermelidir"
        ),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
