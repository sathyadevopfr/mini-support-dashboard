import { useAuth } from '../../context/AuthContext';
import { AuthForm } from '../../components/ui/AuthForm';

export const LoginPage = () => {
  const { login } = useAuth();

  const handleLogin = async (username: string, password: string) => {
    await login({ username, password });
  };

  return (
    <AuthForm
      title="Login"
      buttonText="Login"
      linkText="Don't have an account? Register"
      linkTo="/register"
      onSubmit={handleLogin}
    />
  );
};
