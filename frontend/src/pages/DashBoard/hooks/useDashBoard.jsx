import { useState, useEffect } from "react";
import { fetchTasks, addTask, deleteTask, updateAtribuition, updateDescription, updateTaskStatus, updateTitle } from "../../../services/taskServices";
import { fetchUsers } from "../../../services/userServices";

export const useDashBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const fetchedTasks = await fetchTasks();
        setTasks(fetchedTasks);

        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    };

    loadData();
  }, []);

  const handleAddTask = async (newTask) => {
    try {
      const task = await addTask(newTask);
      setTasks((prevTasks) => [...prevTasks, task]);
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
    }
  };

  const handleUpdateTaskStatus = async (taskId, newStatus) => {
    try {
      const updatedTask = await updateTaskStatus(taskId, newStatus);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === taskId ? updatedTask : task))
      );
    } catch (error) {
      console.error("Erro ao atualizar o status da tarefa:", error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error);
    }
  };

  const filterTasksByStatus = (status) => {
    return tasks.filter((task) => task.status === status);
  };

  const renderTasksByStatus = (status, TaskComponent) => {
    return filterTasksByStatus(status).map((task) => (
      <div
        key={task.id}
        draggable
        onDragStart={(e) => e.dataTransfer.setData("taskId", task.id)}
      >
        <TaskComponent
          taskId={task.id}
          title={task.title}
          description={task.description}
          atribution={task.user ? task.user.name : "Sem usuário"}
          status={task.status}
          deleteTask={handleDeleteTask}
          updateTitle={updateTitle}
          updateDescription={updateDescription}
          updateAtribuition={updateAtribuition}
          users={users}
        />
      </div>
    ));
  };

  const handleDrop = (e, newStatus) => {
    const taskId = e.dataTransfer.getData("taskId");
    handleUpdateTaskStatus(parseInt(taskId), newStatus);
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  return {
    tasks,
    users,
    handleAddTask,
    renderTasksByStatus,
    handleDrop,
    allowDrop,
    handleDeleteTask,
    updateTitle,
    updateDescription,
    updateAtribuition,
  };
};
