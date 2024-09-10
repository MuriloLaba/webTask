export const fetchTasks = async () => {
  try {
    const response = await fetch("http://localhost:5000/tasks");
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar tarefas:", error);
    throw error;
  }
};

export const addTask = async (newTask) => {
  try {
    const response = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    return await response.json();
  } catch (error) {
    console.error("Erro ao adicionar tarefa:", error);
    throw error;
  }
};

export const updateTaskStatus = async (taskId, newStatus) => {
  try {
    const response = await fetch(`http://localhost:5000/tasks/${taskId}/status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    });
    return await response.json();
  } catch (error) {
    console.error("Erro ao atualizar o status da tarefa:", error);
    throw error;
  }
};

export const deleteTask = async (taskId) => {
  try {
    await fetch(`http://localhost:5000/tasks/${taskId}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Erro ao deletar tarefa:", error);
    throw error;
  }
};

export const updateTitle = async (taskId, newTitle) => {
  try {
    const response = await fetch(`http://localhost:5000/tasks/${taskId}/title`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle }),
    });
    return await response.json();
  } catch (error) {
    console.error("Erro ao atualizar o título da tarefa:", error);
    throw error;
  }
};

export const updateDescription = async (taskId, newDescription) => {
  try {
    const response = await fetch(`http://localhost:5000/tasks/${taskId}/description`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description: newDescription }),
    });
    return await response.json();
  } catch (error) {
    console.error("Erro ao atualizar a descrição da tarefa:", error);
    throw error;
  }
};

export const updateAtribuition = async (taskId, newUserId) => {
  try {
    const response = await fetch(`http://localhost:5000/tasks/${taskId}/user`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: newUserId }),
    });
    return await response.json();
  } catch (error) {
    console.error("Erro ao atualizar o usuário da tarefa:", error);
    throw error;
  }
};