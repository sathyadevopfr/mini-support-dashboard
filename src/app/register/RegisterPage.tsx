import { useAuth } from '../../context/AuthContext';
import { AuthForm } from '../../components/ui/AuthForm';

export const RegisterPage = () => {
  const { register } = useAuth();

  const handleRegister = async (username: string, password: string) => {
    await register({ username, password });
  };

  return (
    <AuthForm
      title="Register"
      buttonText="Register"
      linkText="Already have an account? Login"
      linkTo="/login"
      onSubmit={handleRegister}
    />
  );
};
