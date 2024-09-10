import React from 'react';
import { Typography, Input, Button } from '@material-tailwind/react';
import { useLogin } from './hooks/useLogin';

export function Login() {
  const { username, password, setUsername, setPassword, handleSignIn, handleLogin } = useLogin();

  return (
    <div className="flex justify-center items-center min-h-screen w-full overflow-hidden">
      <div className="flex flex-col justify-center items-center rounded-lg bg-black w-96 p-5">
        <Typography variant="h3" color="white" className="text-center">
          Faça seu login
        </Typography>

        <div className="w-full my-5">
          <Input 
            label="Nome de usuario" 
            className="text-white" 
            variant="static" 
            color="white"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="w-full my-5">
          <Input 
            label="Senha" 
            className="text-white" 
            variant="static" 
            type="password"
            color="white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex gap-4">
          <Button color="white" variant="outlined" onClick={handleSignIn}>
            Cadastrar-se
          </Button>
          <Button color="white" variant="outlined" onClick={() => handleLogin(username, password)}>
            Entrar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
