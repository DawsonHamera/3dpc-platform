import z from "zod"
import { usersModelSchema } from "../../types/zod/schemas"

export type User = z.infer<typeof usersModelSchema>;

export interface LoginResponse {
    user: User
    access_token: string
    stream_token: string
}

export interface LoginRequest {
    email: string
    password: string
}

export interface RegisterRequest {
    email: string
    password: string
    name: string
    grade_id: number
}

export type AuthState = {
    user: User | null
    expires_at: number | null
    access_token: string | null
    stream_token: string | null
}