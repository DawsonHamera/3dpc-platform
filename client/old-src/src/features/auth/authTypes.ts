export interface User {
    id: number
    name: string
    email: string
    role: Role
    score: number
    lastActive: string
}

export interface Role {
    id: number
    name: string
}

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
    access_token: string | null
    stream_token: string | null
}