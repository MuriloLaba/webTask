import React, { useState } from 'react';
import { Dialog, Select, Option, DialogHeader, DialogBody, DialogFooter, Button } from '@material-tailwind/react';

const UpdateAtribuitionModal = ({ open, handleOpen, updateAtribuition, users }) => {
  const [newUserId, setNewUserId] = useState();

  const handleSelectChange = (value) => {
    setNewUserId(value); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateAtribuition(newUserId); 
    handleOpen(); 
  };

  return (
    <Dialog open={open} handler={handleOpen} size='xs'>
      <DialogHeader className='flex justify-center text-4xl'>Atualizar Atribuição</DialogHeader>
      <form onSubmit={handleSubmit}>
        <DialogBody>
          <div className="grid grid-cols-1 gap-6">
            <Select label="Escolha o Usuário" onChange={handleSelectChange}>
              {users.map((user) => (
                <Option key={user.id} value={String(user.id)}>
                  {user.name}
                </Option>
              ))}
            </Select>
          </div>
        </DialogBody>
        <DialogFooter className='flex justify-between'>
          <Button variant="text" color="red" size='lg' onClick={handleOpen}>
            Cancelar
          </Button>
          <Button type="submit" color="green" size='lg'>
            Atualizar
          </Button>
        </DialogFooter>
      </form>
    </Dialog>
  );
};

export default UpdateAtribuitionModal;
