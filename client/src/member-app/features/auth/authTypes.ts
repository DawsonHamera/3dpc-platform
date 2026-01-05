import type { User as UserType } from "../users/usersApi";

// Auth-specific types that aren't in Prisma
export interface LoginResponse {
    user: UserType;
    access_token: string;
    stream_token: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    email: string;
    password: string;
    name: string;
    grade_id: number;
}

export type AuthState = {
    user: UserType | null;
    expires_at: number | null;
    access_token: string | null;
    stream_token: string | null;
};
