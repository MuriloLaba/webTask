import React from "react";
import { Typography, Card, CardHeader, CardBody } from "@material-tailwind/react";
import { useDashBoard } from "./hooks/useDashBoard";

export function DashBoard() {
  const { handleSignIn, handleLogin } = useDashBoard();

  return (
    <div className="mt-8 flex flex-col size-full">
      <Card className="bg-black">
        <CardHeader
          variant="gradient"
          color="teal"
          className="relative mb-3 p-1"
        >
          <div className="flex items-center justify-center">
            <Typography variant="h3" color="white" className="select-none">
              Tarefas
            </Typography>
          </div>
        </CardHeader>

        <CardBody className="flex px-4 pt-0 pb-2 gap-4 overflow-hidden h-[84vh]">
          <div className="size-full bg-black rounded-xl border-white border flex-col p-4">
              
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default DashBoard;
