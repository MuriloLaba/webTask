import { useState } from 'react';
import { registerUser } from '../../../services/userServices'; // Importa o serviço
import { useNavigate } from 'react-router-dom';

export const useSignIn = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await registerUser(name, username, password); 
      alert('Usuário cadastrado com sucesso!');
      setName('');
      setUsername('');
      setPassword('');
      navigate('/');
    } catch (error) {
      alert(error.message); 
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
