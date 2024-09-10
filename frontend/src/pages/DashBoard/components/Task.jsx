import React from "react";
import { Typography } from "@material-tailwind/react";

export function Task({ title, description, atribution, status }) {
  
  const getStatusColor = (status) => {
    switch (status) {
      case 0:
        return 'bg-gray-800'; 
      case 1:
        return 'bg-blue-800'; 
      case 2:
        return 'bg-green-500'; 
      default:
        return 'bg-gray-800'; 
    }
  };

  return (
    <div className={`mt-2 flex flex-col w-12/12 rounded-xl p-1 ${getStatusColor(status)} hover:opacity-50 cursor-pointer`}>
      <div className="flex justify-center">
        <Typography variant="h4" color="white">{title}</Typography>
      </div>
      <div className="flex justify-center my-4">
        <Typography variant="lead" color="white">{description}</Typography>
      </div>
      <div className="flex justify-center">
        <Typography variant="small" color="white">{atribution}</Typography>
      </div>
    </div>
  );
}

export default Task;
