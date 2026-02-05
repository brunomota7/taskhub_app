
import { api } from "./api";

type LoginRequest = {
    email: string;
    password: string;
}

type SignupRequest = {
    name: string;
    email: string;
    password: string;
};

export async function login(data: LoginRequest) {
    const response = await api.post("/auth/login", data);
    return response.data as { token: string };
};

export async function signup(data: SignupRequest): Promise<void> {
  await api.post("/auth/signup", data);
};
