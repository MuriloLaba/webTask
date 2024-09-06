import React from 'react';
import { Typography, Input, Button } from '@material-tailwind/react';
import { useLogin } from './hooks/useLogin';  // Importando o hook personalizado

export function Login() {
  const { handleSignIn, handleLogin } = useLogin();  // Desestruturando as funções do hook

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center rounded-lg bg-gray-800 w-96 p-5">
        <Typography variant="h3" color="white" className="text-center">
          Faça seu login
        </Typography>

        <div className="w-full my-5">
          <Input label="CPF" className="text-white" variant="static" />
        </div>

        <div className="w-full my-5">
          <Input label="Senha" className="text-white" variant="static" type="password" />
        </div>

        <div className="flex gap-4">
          <Button color="white" variant="outlined" onClick={handleSignIn}>
            Cadastrar-se
          </Button>
          <Button color="white" variant="outlined" onClick={handleLogin}>
            Entrar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
