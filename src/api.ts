import axios,{AxiosResponse} from "axios"

;
import { Todo } from "./Components/constants";


export const postTodo=async (title:string)=>{
const newTodo:Todo={
    title,
    status:false,
}

const res:AxiosResponse<Todo> = await axios.post(`http://localhost:8080/todos`,newTodo)
}

export const getTodos=async ()=>{
    const res:AxiosResponse<Todo> =await axios.get(`http://localhost:8080/todos`)
    return res.data
}