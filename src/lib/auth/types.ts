export type SessionUser = {
  email: string;
};

export interface AuthService {
  login(email: string, password: string): Promise<SessionUser | null>;
  logout(): Promise<void>;
  getSession(token?: string): Promise<SessionUser | null>;
}
