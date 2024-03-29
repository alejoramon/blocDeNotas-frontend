// Definimos la URL base de nuestro backend
const baseURL = "http://localhost:4000";

// Función para autenticar a un usuario
export const loginUser = async (credentials) => {
  try {
    // Realizamos una solicitud POST al endpoint /login del backend
    const response = await fetch(`${baseURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Especificamos el tipo de contenido como JSON
      },
      body: JSON.stringify(credentials), // Convertimos las credenciales a formato JSON y las enviamos en el cuerpo de la solicitud
    });
    const data = await response.json(); // Convertimos la respuesta a JSON
    if (!response.ok) {
      // Si la respuesta no es exitosa, lanzamos un error con el mensaje proporcionado por el servidor
      throw new Error(data.message);
    }
    return data; // Devolvemos los datos del usuario si la autenticación es exitosa
  } catch (error) {
    // Capturamos cualquier error y lo lanzamos
    throw new Error(error.message);
  }
};

// Función para registrar un nuevo usuario
export const registerUserService = async ({ userName, email, password }) => {
  const response = await fetch(`${baseURL}/register`, {
    method: "POST",
    body: JSON.stringify({ userName, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

// Función para obtener todas las notas disponibles
export const getAllNotes = async (token) => {
  try {
    // Realizamos una solicitud GET al endpoint /notes del backend
    const response = await fetch(`${baseURL}/notas`, {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json", // Especificamos el tipo de contenido como JSON
      },
    });
    const data = await response.json(); // Convertimos la respuesta a JSON
    if (!response.ok) {
      // Si la respuesta no es exitosa, lanzamos un error con el mensaje proporcionado por el servidor
      throw new Error(data.message);
    }
    return data; // Devolvemos un arreglo de notas si la operación es exitosa
  } catch (error) {
    // Capturamos cualquier error y lo lanzamos
    throw new Error(error.message);
  }
};
export const getAllCategories = async (token) => {
  try {
    // Realizamos una solicitud GET al endpoint /notes del backend
    const response = await fetch(`${baseURL}/categories`, {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json", // Especificamos el tipo de contenido como JSON
      },
    });
    const data = await response.json(); // Convertimos la respuesta a JSON
    if (!response.ok) {
      // Si la respuesta no es exitosa, lanzamos un error con el mensaje proporcionado por el servidor
      throw new Error(data.message);
    }
    return data; // Devolvemos un arreglo de notas si la operación es exitosa
  } catch (error) {
    // Capturamos cualquier error y lo lanzamos
    throw new Error(error.message);
  }
};
// Función para obtener las notas de un usuario específico
export const getUserNotes = async (userId) => {
  try {
    // Realizamos una solicitud GET al endpoint /notes/${userId} del backend
    const response = await fetch(`${baseURL}/notes/${userId}`);
    const data = await response.json(); // Convertimos la respuesta a JSON
    if (!response.ok) {
      // Si la respuesta no es exitosa, lanzamos un error con el mensaje proporcionado por el servidor
      throw new Error(data.message);
    }
    return data; // Devolvemos las notas del usuario si la operación es exitosa
  } catch (error) {
    // Capturamos cualquier error y lo lanzamos
    throw new Error(error.message);
  }
};

// Función para crear una nueva nota
export const createNote = async (noteData, token) => {
  try {
    // Realizamos una solicitud POST al endpoint /create del backend
    const response = await fetch(`${baseURL}/notas`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json", // Especificamos el tipo de contenido como JSON
      },
      body: JSON.stringify(noteData), // Convertimos los datos de la nueva nota a formato JSON y los enviamos en el cuerpo de la solicitud
    });
    const data = await response.json(); // Convertimos la respuesta a JSON
    if (!response.ok) {
      // Si la respuesta no es exitosa, lanzamos un error con el mensaje proporcionado por el servidor
      throw new Error(data.message);
    }
    return data; // Devolvemos los datos de la nota creada si la operación es exitosa
  } catch (error) {
    // Capturamos cualquier error y lo lanzamos
    throw new Error(error.message);
  }
};

// Función para actualizar una nota existente
export const updateNote = async (noteId, noteData) => {
  try {
    // Realizamos una solicitud PUT al endpoint /notes/${noteId} del backend
    const response = await fetch(`${baseURL}/notes/${noteId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // Especificamos el tipo de contenido como JSON
      },
      body: JSON.stringify(noteData), // Convertimos los datos actualizados de la nota a formato JSON y los enviamos en el cuerpo de la solicitud
    });
    const data = await response.json(); // Convertimos la respuesta a JSON
    if (!response.ok) {
      // Si la respuesta no es exitosa, lanzamos un error con el mensaje proporcionado por el servidor
      throw new Error(data.message);
    }
    return data; // Devolvemos los datos de la nota actualizada si la operación es exitosa
  } catch (error) {
    // Capturamos cualquier error y lo lanzamos
    throw new Error(error.message);
  }
};

export const getNoteById = async (token, id) => {
  try {
    // Realizamos una solicitud GET al endpoint /notes del backend
    const response = await fetch(`${baseURL}/notas/${id}`, {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json", // Especificamos el tipo de contenido como JSON
      },
    });
    const data = await response.json(); // Convertimos la respuesta a JSON
    if (!response.ok) {
      // Si la respuesta no es exitosa, lanzamos un error con el mensaje proporcionado por el servidor
      throw new Error(data.message);
    }
    return data; // Devolvemos un arreglo de notas si la operación es exitosa
  } catch (error) {
    // Capturamos cualquier error y lo lanzamos
    throw new Error(error.message);
  }
};
export const editNote = async (noteData, token) => {
  try {
    // Realizamos una solicitud POST al endpoint /create del backend
    const response = await fetch(`${baseURL}/notas/${noteData.id}`, {
      method: "PUT",
      headers: {
        Authorization: token,
        "Content-Type": "application/json", // Especificamos el tipo de contenido como JSON
      },
      body: JSON.stringify(noteData), // Convertimos los datos de la nueva nota a formato JSON y los enviamos en el cuerpo de la solicitud
    });
    const data = await response.json(); // Convertimos la respuesta a JSON
    if (!response.ok) {
      // Si la respuesta no es exitosa, lanzamos un error con el mensaje proporcionado por el servidor
      throw new Error(data.message);
    }
    return data; // Devolvemos los datos de la nota creada si la operación es exitosa
  } catch (error) {
    // Capturamos cualquier error y lo lanzamos
    throw new Error(error.message);
  }
};
export const deleteNote = async (noteId, token) => {
  try {
    // Realizamos una solicitud POST al endpoint /create del backend
    console.log("Antes de la fetch");
    const response = await fetch(`${baseURL}/notas/${noteId}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
        "Content-Type": "application/json", // Especificamos el tipo de contenido como JSON
      },
    });
    console.log("Despues de la fetch");
    const data = await response.json(); // Convertimos la respuesta a JSON
    console.log("Tengo datos delete:", data);

    return data; // Devolvemos los datos de la nota creada si la operación es exitosa
  } catch (error) {
    // Capturamos cualquier error y lo lanzamos
    throw new Error(error.message);
  }
};
// Función para obtener todas las notas disponibles con sus categorías
export const getAllNotesWithCategories = async (token) => {
  try {
    const response = await fetch(`${baseURL}/notas-with-categories`, {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función para obtener el nombre de la categoría basado en su ID
// Función para obtener el nombre de la categoría basado en su ID
export const getCategoryName = async (categoryId, user) => {
  try {
    const response = await fetch(`${baseURL}/categories/${categoryId}`, {
      headers: {
        Authorization: `${user.token}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data.name; // Suponiendo que el nombre de la categoría se encuentra en la propiedad "name"
  } catch (error) {
    console.error("Error fetching category name:", error);
    return "Sin categoría"; // Devolver un valor predeterminado en caso de error
  }
};
