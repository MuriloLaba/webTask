import React, { useState } from 'react';
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button, Input } from '@material-tailwind/react';

const UpdateDescriptionModal = ({ open, handleOpen, updateDescription, currentDescription }) => {
  const [newDescription, setNewDescription] = useState(currentDescription);

  const handleChange = (e) => {
    setNewDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDescription(newDescription);
    handleOpen(); 
  };

  return (
    <Dialog open={open} handler={handleOpen} size='xs'>
      <DialogHeader className='flex justify-center text-4xl'>Atualizar Descrição</DialogHeader>
      <form onSubmit={handleSubmit}>
        <DialogBody>
          <div className="grid grid-cols-1 gap-6">
            <Input size="lg" label="Descrição" value={newDescription} onChange={handleChange} />
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

export default UpdateDescriptionModal;
