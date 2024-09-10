import { useState } from "react";

// Hook que gerencia as tarefas
export const useDashBoard = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Tarefa 1',
      description: 'Descrição 1',
      atribution: 'Usuario 1',
      status: 0
    },
    {
      id: 2,
      title: 'Tarefa 2',
      description: 'Descrição 2',
      atribution: 'Usuario 1',
      status: 1
    },
    {
      id: 3,
      title: 'Tarefa 3',
      description: 'Descrição 3',
      atribution: 'Usuario 1',
      status: 2
    },
    {
      id: 4,
      title: 'Tarefa 4',
      description: 'Descrição 4',
      atribution: 'Usuario 2',
      status: 1
    },
  ]);

  // Função para adicionar uma nova tarefa
  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: `Tarefa ${tasks.length + 1}`,
      description: "Nova tarefa",
      atribution: "Novo usuário",
      status: 0
    };
    setTasks([...tasks, newTask]);
  };

  // Função para atualizar o status da tarefa
  const updateTaskStatus = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  // Função para filtrar tarefas por status
  const filterTasksByStatus = (status) => {
    return tasks.filter((task) => task.status === status);
  };

  // Função para renderizar as tarefas filtradas por status
  const renderTasksByStatus = (status, TaskComponent) => {
    return filterTasksByStatus(status).map((task) => (
      <div
        key={task.id}
        draggable
        onDragStart={(e) => e.dataTransfer.setData("taskId", task.id)}
      >
        <TaskComponent
          title={task.title}
          description={task.description}
          atribution={task.atribution}
          status={task.status}
        />
      </div>
    ));
  };

  // Função para permitir o drop e atualizar o status da tarefa
  const handleDrop = (e, newStatus) => {
    const taskId = e.dataTransfer.getData("taskId");
    updateTaskStatus(parseInt(taskId), newStatus);
  };

  // Função para permitir o arrastar sobre uma área válida (necessário para o drop funcionar)
  const allowDrop = (e) => {
    e.preventDefault();
  };

  return {
    addTask,
    renderTasksByStatus,
    handleDrop,
    allowDrop
  };
};
