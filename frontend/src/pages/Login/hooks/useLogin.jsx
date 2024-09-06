// src/hooks/useLogin.jsx
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const navigate = useNavigate();

  // Função para redirecionar para a página de SignIn
  const handleSignIn = () => {
    navigate('/signin');
  };

  // Função para o botão Entrar (aqui você pode adicionar a lógica de login)
  const handleLogin = () => {
    // Adicione a lógica de autenticação aqui, por exemplo:
    // verificar o CPF e senha, chamar uma API, etc.
    console.log('Login realizado!');
  };

  return {
    handleSignIn,
    handleLogin,
  };
};
