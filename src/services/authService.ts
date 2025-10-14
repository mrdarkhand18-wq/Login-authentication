import { User, Credentials } from '../types/auth';

const STORAGE_KEY = 'auth_users';
const SESSION_KEY = 'auth_session';

export class AuthService {
  private static getStoredUsers(): User[] {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  }

  private static saveUsers(users: User[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  }

  static register(credentials: Credentials): { success: boolean; message: string; user?: User } {
    const users = this.getStoredUsers();

    if (users.some(u => u.email === credentials.email)) {
      return { success: false, message: 'Email already registered' };
    }

    const newUser: User = {
      id: crypto.randomUUID(),
      email: credentials.email,
      name: credentials.name || credentials.email.split('@')[0],
    };

    users.push(newUser);
    this.saveUsers(users);

    return { success: true, message: 'Registration successful', user: newUser };
  }

  static login(credentials: Credentials): { success: boolean; message: string; user?: User } {
    const users = this.getStoredUsers();
    const user = users.find(u => u.email === credentials.email);

    if (!user) {
      return { success: false, message: 'Invalid email or password' };
    }

    sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
    return { success: true, message: 'Login successful', user };
  }

  static logout(): void {
    sessionStorage.removeItem(SESSION_KEY);
  }

  static getCurrentUser(): User | null {
    const stored = sessionStorage.getItem(SESSION_KEY);
    return stored ? JSON.parse(stored) : null;
  }

  static isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }
}
