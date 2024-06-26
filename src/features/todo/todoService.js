import axios from "axios";
const API_URL = "https://listtimes.onrender.com/api/todo/"
// const API_URL = 'api/todo/'

export const fetchTodo = async() => {
    const response  = await axios.get(API_URL);
    // console.log(response.data);
    return response.data
}

export const removeTodo = async(_id) => {
    // console.log(_id)
    const response = await axios.delete(API_URL + _id);
    // console.log(response);
    return response;
}


export const createTodo = async(formData) => {
    // console.log(formData);
    const response = await axios.post(API_URL, formData);
    // console.log(response.data);
    return response.data
}

export const updateTodo = async(todo) => {
    // console.log(todo)
    const response = await axios.put(API_URL + todo._id ,  {title : todo.title, description : todo.description});
    // console.log(response.data);
    return response.data;
}