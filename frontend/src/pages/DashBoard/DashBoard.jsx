import React from "react";
import { Typography, Card, CardHeader, CardBody, Button } from "@material-tailwind/react";
import { useDashBoard } from "./hooks/useDashBoard";
import Task from "./components/Task";

export function DashBoard() {
  const { addTask, renderTasksByStatus, handleDrop, allowDrop } = useDashBoard();

  return (
    <div className="mt-8 flex flex-col size-full">
      <Card className="bg-black">
        
        <CardHeader variant="gradient" color="indigo" className="relative mb-3 p-2">
          <div className="flex items-center justify-between mx-4">
            <Typography variant="h3" color="white" className="select-none">Tarefas</Typography>
            <Button color="green" onClick={addTask}>Adicionar</Button>
          </div>
        </CardHeader>

        <CardBody className="flex px-4 pt-0 pb-2 gap-4 overflow-hidden h-[84vh]">
          <div className="flex w-full justify-around">
            <div className="w-1/3 bg-black rounded-xl flex flex-col p-4 overflow-y-scroll no-scrollbar"
              onDrop={(e) => handleDrop(e, 0)} onDragOver={allowDrop}>
              <Typography variant="h5" color="white" className="self-center">Pendentes</Typography>
              {renderTasksByStatus(0, Task)}
            </div>

            <div className="w-1/3 bg-black rounded-xl flex flex-col p-4 overflow-y-scroll no-scrollbar"
              onDrop={(e) => handleDrop(e, 1)} onDragOver={allowDrop}>
              <Typography variant="h5" color="white" className="self-center">Em Andamento</Typography>
              {renderTasksByStatus(1, Task)}
            </div>

            <div className="w-1/3 bg-black rounded-xl flex flex-col p-4 overflow-y-scroll no-scrollbar"
              onDrop={(e) => handleDrop(e, 2)} onDragOver={allowDrop}>
              <Typography variant="h5" color="white" className="self-center">Concluídas</Typography>
              {renderTasksByStatus(2, Task)}
            </div>
          </div>
        </CardBody>

      </Card>
    </div>
  );
}

export default DashBoard;
