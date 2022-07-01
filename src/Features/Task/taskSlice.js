import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    // {
    //     id: "1",
    //     title: "Task 1",
    //     description:"task 1",
    //     completed: false
    // },
    // {
    //     id: "2",
    //     title: "Task 2",
    //     description:"task 2",
    //     completed: false
    // }
]

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action)=>{
            if(action.payload.id){
                action.payload.id = action.payload.id.toString()
            }
            state.push(action.payload)
        },
        deleteTask: (state,action)=>{
            const taskFound = state.find(el => el.id === action.payload )
            if(taskFound){
                state.splice(state.indexOf(taskFound),1)
            }
        },
        editTaks: (state,action)=>{
      
            const{id,title,description} = action.payload;
            const foundTask = state.find(el => el.id === id);
            if(foundTask){
                foundTask.title = title;
                foundTask.description= description;
            }
        }
    }
});
export const {addTask, deleteTask,editTaks} = taskSlice.actions
export default taskSlice.reducer;