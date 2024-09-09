import { useNavigate } from 'react-router-dom';

export const useDashBoard = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/SignIn');
  };

  const handleLogin = () => {
    navigate('/DashBoard');
  };

  return {
    handleSignIn,
    handleLogin,
  };
};
