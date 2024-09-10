import { useState, useEffect } from "react";

export const useDashBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);

  // Função para buscar todas as tarefas do backend
  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:5000/tasks");
      const data = await response.json();
      console.log("", data);
      setTasks(data); // Atualiza o estado com as tarefas vindas do backend
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    }
  };

  // Função para buscar todos os usuários do backend
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/users");
      const data = await response.json();
      setUsers(data); // Atualiza o estado com os usuários vindos do backend
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  };

  useEffect(() => {
    fetchTasks(); // Carrega as tarefas quando o componente for montado
    fetchUsers(); // Carrega os usuários quando o componente for montado
  }, []);

  // Função para adicionar uma nova tarefa
  const addTask = async (newTask) => {
    try {
      const response = await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });
      const data = await response.json();
      setTasks((prevTasks) => [...prevTasks, data]); // Adiciona a nova tarefa à lista
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
    }
  };

  // Função para atualizar o status da tarefa
  const updateTaskStatus = async (taskId, newStatus) => {
    try {
      await fetch(`http://localhost:5000/tasks/${taskId}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, status: newStatus } : task
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar o status da tarefa:", error);
    }
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
          atribution={task.user ? task.user.name : "Sem usuário"}
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
    tasks,
    users,
    addTask,
    renderTasksByStatus,
    handleDrop,
    allowDrop
  };
};
