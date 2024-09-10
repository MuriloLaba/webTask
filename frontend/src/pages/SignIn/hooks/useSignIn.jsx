import { useState } from 'react';

export const useSignIn = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Função para o botão de registro
  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Usuário cadastrado com sucesso!');
        // Redirecionar ou limpar os campos do formulário após sucesso, se necessário
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }
  };

  return {
    name,
    setName,
    username,
    setUsername,
    password,
    setPassword,
    handleRegister,
  };
};
