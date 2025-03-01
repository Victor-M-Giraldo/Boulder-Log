import { User } from "./user";

export interface LoginResponse {
    token: string;
    expiresIn: string;
    user: User;
}

export interface RegisterResponse {
    token: string;
    expiresIn: string;
    user: User;
}

export interface Token {
    token: string;
    expiresIn: string;
}
