import type { User as UserType } from "../users/usersApi";

// API Response wrapper
export interface ApiResponse<T> {
    statusCode: number;
    message: string;
    data: T;
}

// Auth-specific types that aren't in Prisma
export interface LoginResponseData {
    user: UserType;
    access_token: string;
    stream_token: string;
    expires_at: string;
}

export type LoginResponse = ApiResponse<LoginResponseData>;

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

export interface WorkstationLoginRequest {
    passkey: string;
}

export interface WorkstationLoginResponseData {
    access_token: string;
}

export type WorkstationLoginResponse =
    ApiResponse<WorkstationLoginResponseData>;

export type AuthState = {
    auth_type: "user" | "workstation" | null;
    user: UserType | null;
    expires_at: number | null;
    access_token: string | null;
    stream_token: string | null;
};
