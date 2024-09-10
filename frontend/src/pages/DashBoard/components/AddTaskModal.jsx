import React, { useState } from 'react';
import { Dialog, Select, Option, DialogHeader, DialogBody, DialogFooter, Button, Input } from '@material-tailwind/react';

const AddTaskModal = ({ open, handleOpen, addTask, users }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    user_id: '',
  });

  const handleClear = () => {
    setFormData([])
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, user_id: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTask(formData); 
    handleOpen(); 
    handleClear();
  };

  return (
    <Dialog open={open} handler={handleOpen} size='xs'>
      <DialogHeader className='flex justify-center text-4xl'>Cadastro de Tarefa</DialogHeader>
      <form onSubmit={handleSubmit}>
        <DialogBody>
          <div className="grid grid-cols-1 gap-6">
            <Input size="lg" label="Título" name="title" value={formData.title} onChange={handleChange} />
            <Input size="lg" label="Descrição" name="description" value={formData.description} onChange={handleChange} />
            <Select
              label="Escolha o Usuário"
              value={formData.user_id}
              onChange={handleSelectChange}
            >
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
            Cadastrar
          </Button>
        </DialogFooter>
      </form>
    </Dialog>
  );
};

export default AddTaskModal;
