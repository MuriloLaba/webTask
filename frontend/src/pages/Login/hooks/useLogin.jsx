import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../services/userServices';

export const useLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/signin');
  };

  const handleLogin = async () => {
    try {
      await loginUser(username, password); 
      navigate('/DashBoard');
    } catch (error) {
      alert(error.message);
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
