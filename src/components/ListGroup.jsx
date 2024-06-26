import {LinearProgress, List, Typography} from '@mui/material'
import ListDetails from "../components/ListDetails"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getTodos } from '../features/todo/todoSlice'


const ListGroup = () => {

  const dispatch = useDispatch()

  const { allTodos, isLoading, isSuccess, isError} = useSelector((state) => state.todo);
 
  useEffect(()=>{
    dispatch(getTodos());
  },[])

  //  IsError
  if(isError){
    return (
      <Typography variant='h5' align='center'  color={"error"} sx={{margin:"20px 0px"}}> something Went wrong .....</Typography>
    )
  }

  // Loading
  if (isLoading){
    return(
      <LinearProgress color="info" sx={{margin: "20px 0px"}}/>
      
    )
  }

  // condition for no Todo Yet
  if(allTodos.length === 0){
    return (
      <Typography variant='h5' align='center' sx={{margin:"20px 0px"}}> No Todos Yet</Typography>
    )
  }
 

  
  return (
   <List>
   {
    allTodos.map((todo) => ( <ListDetails key={todo._id} todo={todo}/>))
   }
   </List>
  )
}

export default ListGroup
