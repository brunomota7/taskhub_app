import React, { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { login as loginService } from "@/services/auth.service";
import { api } from "@/services/api";
import { User } from "@/types/User";

type AuthContextData = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  /**
   * carrega usuário se existir token salvo
   */
  useEffect(() => {
    const loadUser = async () => {
      const token = await SecureStore.getItemAsync("token");

      if (token) {
        try {
          api.defaults.headers.common.Authorization = `Bearer ${token}`;

          const { data } = await api.get<User>("/users/me");
          setUser(data);
        } catch {
          await SecureStore.deleteItemAsync("token");
          setUser(null);
        }
      }

      setLoading(false);
    };

    loadUser();
  }, []);

  /**
   * login
   */
  async function login(email: string, password: string) {
    const { token } = await loginService({ email, password });

    await SecureStore.setItemAsync("token", token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    const { data } = await api.get<User>("/users/me");
    setUser(data);
  }

  /**
   * logout
   */
  async function logout() {
    await SecureStore.deleteItemAsync("token");
    delete api.defaults.headers.common.Authorization;
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
