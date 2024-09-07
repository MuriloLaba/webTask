import React from 'react';
import { Typography, Input, Button, Card } from '@material-tailwind/react';
import { useDashBoard } from './hooks/useDashBoard'; 

export function DashBoard() {
  const { handleSignIn, handleLogin } = useDashBoard(); 

  return (
    <div className="flex justify-center items-center w-auto h-auto ">
      <Card className='flex w-11/12 bg-blue-gray-900 items-center'>
          <Typography variant='lead' color='white' >Tarefas</Typography>
      </Card>
    </div>
  );
}

export default DashBoard;
