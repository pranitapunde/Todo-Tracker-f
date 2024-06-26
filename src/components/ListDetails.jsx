import React from 'react'
import { Box, Button, Divider, ListItem, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editfromState, removeFromState } from '../features/todo/todoSlice';

const ListItems = ({todo}) => {

  const dispatch = useDispatch(); 
  
  const {isSuccess} = useSelector(state => state.todo);

  const handleDelete = (_id) => { 
    // console.log("Delete")
    dispatch(deleteTodo(_id));
    if(isSuccess){
      // console.log("remove From State")
      dispatch(removeFromState(_id))
    }
  }


  const handleEdit = (todo) => {
    console.log("result")
    dispatch(editfromState(todo))

  }

  return (
    <>
      <ListItem sx={{ margin: "20px 0px" }}>
      <Box sx={{flexGrow: 1}}>
      <Typography variant='h6' > {todo.title}</Typography>
      <Typography variant='body2'> {todo.description}</Typography>
      </Box>
        <span>
          <Button color='warning' variant='outlined' endIcon={<EditIcon />} onClick={() => handleEdit(todo) }> Edit</Button>
          <Button color='error' variant='outlined' endIcon={<DeleteIcon />} onClick={() => handleDelete(todo._id)}> Delete</Button>
        </span>
      </ListItem>
      <Divider />
    </>

  )
}

export default ListItems
