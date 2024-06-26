import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createTodo, fetchTodo, removeTodo, updateTodo } from "./todoService";

const initialState = {
    allTodos : [
        {id : 1, title : "name 1", description : "new Description here"},
        {id : 2, title : "name 2", description : "new Description here"},
        {id : 3, title : "name 3", description : "new Description here"},
        {id : 4, title : "name 4", description : "new Description here"},
    ],

    isLoading : false,
    isSuccess : false,
    isError : false,

    edit : {
        todo : {},
        isEdit : false
    }
}


const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        removeFromState : (state, action) => {
            return {
                ...state,
                allTodos : state.allTodos.filter(item => item._id !== action.payload)
            }
        },

        editfromState : (state, action) => {
            return {
                ...state,
                edit : { todo : action.payload , isEdit : true}
            }
        }

    },
    extraReducers : builder => {
        builder
        .addCase(getTodos.pending, (state, action) => {
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        })
        .addCase(getTodos.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.allTodos = action.payload
            state.isError = false
        })
        .addCase(getTodos.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
        })
        

        .addCase(deleteTodo.pending, (state, action) => {
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        })
        .addCase(deleteTodo.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
        })
        .addCase(deleteTodo.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
        })


        .addCase(postTodo.pending, (state, action) => {
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        })
        .addCase(postTodo.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.allTodos = [action.payload, ...state.allTodos],
            state.isError = false
        })
        .addCase(postTodo.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
        })


        .addCase(putTodo.pending, (state, action) => {
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        })
        .addCase(putTodo.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.allTodos = state.allTodos.map(item => item._id === action.payload._id ? action.payload : item),
            state.edit = {todo : {} , isEdit : false}
            state.isError = false
        })
        .addCase(putTodo.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
        })


        
    }
})


export const getTodos = createAsyncThunk("GET/TODOS", async() => {
  try {
    return await fetchTodo();
  } catch (error) {
    console.log(error.message);
  }  
})
// then listitem


export const deleteTodo = createAsyncThunk("DELETE/TODO" , async(id) => {
    try {
        return await removeTodo(id);
    } catch (error) {
        console.log(error.message);
    }
})


export const postTodo = createAsyncThunk("POST/TODO", async(formData) => {
    try {
        return await createTodo(formData);
    } catch (error) {
        console.log(error.message);
    }
})

export const putTodo = createAsyncThunk("PUT/TODO", async(todo) => {
    try {
        return await updateTodo(todo);
    } catch (error) {
        console.log(error.message);
    }
})



export const {removeFromState, editfromState} = todoSlice.actions;
export default todoSlice.reducer;