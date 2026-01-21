import { describe, it, expect } from "vitest";
import { loginSchema, registerSchema } from "./auth";

describe("auth validations", () => {
    describe("loginSchema", () => {
        it("should fail for invalid email", () => {
            const result = loginSchema.safeParse({ email: "invalid-email", password: "password123" });
            expect(result.success).toBe(false);
        });

        it("should fail for short password", () => {
            const result = loginSchema.safeParse({ email: "test@example.com", password: "short" });
            expect(result.success).toBe(false);
        });

        it("should pass for valid input", () => {
            const result = loginSchema.safeParse({ email: "test@example.com", password: "password123" });
            expect(result.success).toBe(true);
        });
    });

    describe("registerSchema", () => {
        it("should fail for password without uppercase letter", () => {
            const result = registerSchema.safeParse({
                email: "test@example.com",
                password: "password123",
            });
            expect(result.success).toBe(false);
        });

        it("should pass for strong password", () => {
            const result = registerSchema.safeParse({
                email: "test@example.com",
                password: "Password123",
            });
            expect(result.success).toBe(true);
        });
    });
});
