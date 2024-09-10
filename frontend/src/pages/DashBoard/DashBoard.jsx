import React from "react";
import { Typography, Card, CardHeader, CardBody, Button } from "@material-tailwind/react";
import { useDashBoard } from "./hooks/useDashBoard";

export function DashBoard() {
  const { } = useDashBoard();

  return (
    <div className="mt-8 flex flex-col size-full">
      <Card className="bg-black">
        <CardHeader
          variant="gradient"
          color="blue-gray"
          className="relative mb-3 p-1"
        >
          <div className="flex items-center justify-between mx-4">
            <Typography variant="h3" color="white" className="select-none">
              Tarefas
            </Typography>
            <Button color="green">Adicionar</Button>
          </div>
        </CardHeader>

        <CardBody className="flex px-4 pt-0 pb-2 gap-4 overflow-hidden h-[84vh]">
          <div className="size-full bg-black rounded-xl  flex-col p-4">
              
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default DashBoard;
