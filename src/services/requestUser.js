import axios from "axios";

const API_URL = "http://localhost:3000/usuarios";

export const getUsuarios = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getUsuarioById = async (id) => {
  const response = await axios.get(`${API_URL}/getOne/${id}`);
  return response.data;
};

export const cadastrarUsuario = async (usuario) => {
  const response = await axios.post(API_URL, usuario);
  return response.data;
};

export const editarUsuario = async (id, usuario) => {
  const response = await axios.put(`${API_URL}/${id}`, usuario);
  return response.data;
};

export const loginUsuario = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};
