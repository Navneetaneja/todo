import React, { useState } from 'react';

const Todo=()=>{
    const [tasks,settasks]=useState([]);
    const [val,setval]=useState("");
    const addTask=(e)=>{
         e.preventDefault();
         settasks([...tasks,val]);
    }
    return(
        <div style={{marginTop:"10vh"}}>
            <input onChange={(e)=>setval(e.target.value)} id="task" style={{width:"50vh",height:"5vh"}} type="text" placeholder="Enter task"/>&nbsp;
            <button onClick={(e)=>addTask(e)} style={{backgroundColor:"green",border:"none",color:"white",width:"20vh",height:"5vh"}}>Add Task</button><br/>
            <ul id="list">
                {
                    tasks.map((task,id)=>{
                        return(
                            <li key={id}>{task}</li>
                        );
                    })
                }
            </ul>
        </div>
    );
}
export default Todo;