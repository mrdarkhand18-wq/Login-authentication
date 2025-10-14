import { useState, useEffect } from 'react';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { Dashboard } from './components/Dashboard';
import { AuthService } from './services/authService';
import { User, Credentials } from './types/auth';

type View = 'login' | 'register';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [view, setView] = useState<View>('login');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleLogin = (credentials: Credentials) => {
    setError('');
    const result = AuthService.login(credentials);

    if (result.success && result.user) {
      setUser(result.user);
    } else {
      setError(result.message);
    }
  };

  const handleRegister = (credentials: Credentials) => {
    setError('');
    const result = AuthService.register(credentials);

    if (result.success && result.user) {
      const loginResult = AuthService.login(credentials);
      if (loginResult.success && loginResult.user) {
        setUser(loginResult.user);
      }
    } else {
      setError(result.message);
    }
  };

  const handleLogout = () => {
    AuthService.logout();
    setUser(null);
    setError('');
  };

  if (user) {
    return <Dashboard user={user} onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzIyMiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="relative z-10 w-full">
        {view === 'login' ? (
          <LoginForm
            onLogin={handleLogin}
            onSwitchToRegister={() => {
              setView('register');
              setError('');
            }}
            error={error}
          />
        ) : (
          <RegisterForm
            onRegister={handleRegister}
            onSwitchToLogin={() => {
              setView('login');
              setError('');
            }}
            error={error}
          />
        )}
      </div>
    </div>
  );
}

export default App;
