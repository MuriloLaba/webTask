export const fetchUsers = async () => {
  try {
    const response = await fetch("http://localhost:5000/users");
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    throw error;
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Erro ao fazer login');
    }

    return data; 
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error; 
  }
};

export const registerUser = async (name, username, password) => {
  try {
    const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, username, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Erro ao cadastrar usuário');
    }

    return data;
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    throw error;
  }
};
