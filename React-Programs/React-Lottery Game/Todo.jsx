import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function Todo()
{


    let [todos,setTodos]=useState([{task:"sample task",id:uuidv4(),isDone:false}])
    let[newTodo,setNewtodo]=useState([""])

    let addnewTask=()=>
    {
       
        setTodos((prevTodos)=>{
          return  [...prevTodos,{task:newTodo,id:uuidv4(),isDone:false}]
        })

        setNewtodo([""])
    }

    let updateTodo=(event)=>
    {   
        setNewtodo(event.target.value)

    }

    let deleteTodo=(id)=>
    {
      setTodos(todos.filter((todo)=>todo.id!=id))
       
    }

    let markasDoneAll=()=>
    {
       setTodos((prevTodos)=> todos.map((todo)=>{
            return {
                ...prevTodos,
                task:todo.task,
                id:uuidv4(),
                isDone:true
            }
        })
    
    )
    }

    let MarkasDone=(id)=>
    {
        setTodos((prevTodos)=> todos.map((todo)=>{
            if(todo.id==id){
                return {
                    ...prevTodos,
                    task:todo.task,
                    id:uuidv4(),
                    isDone:true
                }
            }
            else{
                return todo
            }
           
        })
    
    )
    }





    return (
        <div>
            <input placeholder="enter your tasks" value={newTodo} onChange={updateTodo}/>
            <br></br>
            <button onClick={addnewTask}>Add</button>
            <hr></hr>
            <h4>Tasks to do</h4>
            <ul>
                {
                    todos.map(

                        (todo)=>{
                       return  <li key={todo.id}>
                        <span style={ todo.isDone? {textDecorationLine:"line-through"}: {}}>{todo.task}</span>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <button onClick={()=>MarkasDone(todo.id)}>Mark as Done</button>
                        </li>
                        }
                    )
                }
            </ul>
            <button onClick={ markasDoneAll}> Mark as Done All</button>
        </div>
    )
}