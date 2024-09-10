import React, { useState } from 'react';
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button, Input } from '@material-tailwind/react';

const UpdateTitleModal = ({ open, handleOpen, updateTitle, currentTitle }) => {
  const [newTitle, setNewTitle] = useState(currentTitle); 

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTitle(newTitle); 
    handleOpen(); 
  };

  return (
    <Dialog open={open} handler={handleOpen} size='xs'>
      <DialogHeader className='flex justify-center text-4xl'>Atualizar o Título</DialogHeader>
      <form onSubmit={handleSubmit}>
        <DialogBody>
          <div className="grid grid-cols-1 gap-6">
            <Input size="lg" label="Título" value={newTitle} onChange={handleChange} />
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

export default UpdateTitleModal;
