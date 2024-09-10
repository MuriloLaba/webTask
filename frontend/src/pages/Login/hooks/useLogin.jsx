import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Função para redirecionar para a página de SignIn
  const handleSignIn = () => {
    navigate('/signin');
  };

  // Função para o botão Entrar
  const handleLogin = async (username, password) => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redireciona para o dashboard
        navigate('/DashBoard');
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    handleSignIn,
    handleLogin,
  };
};
