import axios from "axios";

const baseUrl = import.meta.env.VITE_API_ENDPOINT ?? '/api/persons';
//  ?? "/api/persons"

const getAll = () => axios.get(baseUrl).then((res) => res.data);

const create = (newPerson) =>
  axios.post(baseUrl, newPerson).then((res) => res.data);

const update = (id, updatedPerson) =>
  axios.put(`${baseUrl}/${id}`, updatedPerson).then((res) => res.data);

const remove = (id) =>
  axios.delete(`${baseUrl}/${id}`).then((res) => res.data);

export default { getAll, create, update, remove };







// import axios from "axios";
// const baseUrl = import.meta.env.VITE_API_ENDPOINT ?? '/api/persons';

// const getAll = () => {
//   const request = axios.get(baseUrl);
//   return request.then((response) => response.data);
// };

// const create = (newObject) => {
//   const request = axios.post(baseUrl, newObject);
//   return request.then((response) => response.data);
// };

// const update = (id, newObject) => {
//   const request = axios.put(`${baseUrl}/${id}`, newObject);
//   return request.then((response) => response.data);
// };

// const remove = (id) => {
//   const request = axios.delete(`${baseUrl}/${id}`);
//   return request.then((response) => response.data);
// };

// const personService = { getAll, create, update, remove };

// export default personService;
