import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postTodo, putTodo } from '../features/todo/todoSlice';

const From = () => {

  const { edit}  = useSelector((state) => state.todo)

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title : "",
    description : "",
  });
  // console.log(formData);
  const {title, description} = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if(edit.isEdit){
      dispatch(putTodo({
        _id : edit.todo._id,
        title,
        description
      }))

    }else{
      dispatch(postTodo(formData));
    }

    setFormData({
      title : "",
      description : ""
    })
  
  }

  // edit ko input me lane k liye

  useEffect(() => {
    setFormData({
      title : edit.todo.title,
      description: edit.todo.description,
    })

  },[edit])

  return (
    <form>
        <TextField label="Enter Title"  fullWidth variant="outlined" name="title" value={title} onChange={handleChange} />
        <TextField sx={{margin:"20px 0px"}} label="Enter Description" variant="outlined" multiline rows={3} fullWidth name="description" value={description} onChange={handleChange}/>
        <Button variant='contained' color='success' fullWidth type='submit' onClick={handleSubmit}> Save</Button>
    </form>
    
  )
}

export default From
