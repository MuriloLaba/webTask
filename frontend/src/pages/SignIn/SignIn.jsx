import React from 'react';
import { Typography, Input, Button } from '@material-tailwind/react';
import { useSignIn } from './hooks/useSignIn';

export function SignIn() {
  const { name, setName, username, setUsername, password, setPassword, handleRegister } = useSignIn();

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col justify-center items-center rounded-lg bg-black w-96 p-5">
        <Typography variant='h3' color="white" className="text-center">Faça seu cadastro</Typography>

        <div className="w-full my-5">
          <Input 
            label="Nome" 
            className="text-white" 
            variant="static"
            color='white'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="w-full my-5">
          <Input 
            label="Nome de usuário" 
            className="text-white" 
            variant="static"
            color='white'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="w-full my-5">
          <Input 
            label="Senha" 
            className="text-white" 
            variant="static" 
            type='password'
            color='white'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className='flex gap-4'>
          <Button fullWidth color='white' variant='outlined' onClick={handleRegister}>
            Cadastrar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
