import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";
import { TrashIcon } from '@heroicons/react/24/outline';
import UpdateTitleModal from "./UpdateTitleModal";
import UpdateDescriptionModal from "./UpdateDescriptionModal"; 
import UpdateAtribuitionModal from "./UpdateAtribuitionModal";

export function Task({ title, description, atribution, status, taskId, deleteTask, updateTitle, updateDescription, updateAtribuition, users }) {
  const [isTitleModalOpen, setIsTitleModalOpen] = useState(false);
  const [isDescriptionModalOpen, setIsDescriptionModalOpen] = useState(false);
  const [isAtribuitionModalOpen, setIsAtribuitionModalOpen] = useState(false);

  const handleOpenTitleModal = () => setIsTitleModalOpen(true);
  const handleCloseTitleModal = () => setIsTitleModalOpen(false);

  const handleOpenDescriptionModal = () => setIsDescriptionModalOpen(true);
  const handleCloseDescriptionModal = () => setIsDescriptionModalOpen(false);

  const handleOpenAtribuitionModal = () => setIsAtribuitionModalOpen(true);
  const handleCloseAtribuitionModal = () => setIsAtribuitionModalOpen(false);

  const handleDeleteTask = async () => {
    await deleteTask(taskId); 
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 0:
        return 'bg-gray-300'; 
      case 1:
        return 'bg-blue-300'; 
      case 2:
        return 'bg-green-300'; 
      default:
        return 'bg-gray-300'; 
    }
  };

  const getHandlerStatusColor = (status) => {
    switch (status) {
      case 0:
        return 'bg-gray-900'; 
      case 1:
        return 'bg-blue-900'; 
      case 2:
        return 'bg-green-900'; 
      default:
        return 'bg-gray-800'; 
    }
  };

  return (
    <div className={`mt-2 flex flex-col w-12/12 rounded-xl ${getStatusColor(status)}`}>
      <div className={`w-full h-5 ${getHandlerStatusColor(status)} rounded-tl-xl rounded-tr-xl hover:opacity-30 cursor-pointer flex justify-end items-center`}>
        <TrashIcon color='red' className='h-4 hover:opacity-90 cursor-pointer mx-2' onClick={handleDeleteTask} />
      </div>

      <div className="flex justify-center hover:opacity-50 cursor-pointer mt-1 border-b border-black" onClick={handleOpenTitleModal}>
        <Typography className="text-xl text-black text-center">{title}</Typography>
      </div>

      <div className="flex justify-center my-4 mx-4 hover:opacity-50 cursor-pointer" onClick={handleOpenDescriptionModal}>
        <Typography className="text-sm text-black text-center">{description}</Typography>
      </div>

      <div className="flex justify-center hover:opacity-50 cursor-pointer mb-1 border-t border-black" onClick={handleOpenAtribuitionModal}>
        <Typography className="text-sm text-black text-center">{atribution}</Typography>
      </div>

      <UpdateTitleModal
        open={isTitleModalOpen}
        handleOpen={handleCloseTitleModal}
        updateTitle={(newTitle) => updateTitle(taskId, newTitle)} 
        currentTitle={title}
      />

      <UpdateDescriptionModal
        open={isDescriptionModalOpen}
        handleOpen={handleCloseDescriptionModal}
        updateDescription={(newDescription) => updateDescription(taskId, newDescription)} 
        currentDescription={description}
      />

      <UpdateAtribuitionModal
        open={isAtribuitionModalOpen}
        handleOpen={handleCloseAtribuitionModal}
        updateAtribuition={(newUserId) => updateAtribuition(taskId, newUserId)} 
        users={users}
        currentUser={atribution}
      />
    </div>
  );
}

export default Task;
