// import {useState} from "react";
// import './App.css';

// function App() {
//   const [tasks, setTasks]=useState([]);
//   const [task,setTask]=useState("");
//   const addTask=()=>{
//     if(task.trim()==="") return;
//     setTasks([...tasks, task]);
//     setTask("");
//   }
//   return (
//     <div className="App">
//         <h1>ToDo App</h1>
//         <h3>Add the lists you want!!!</h3>
//         <input value={task} placeholder="Task" onChange={(e) => setTask(e.target.value)}/>
//         <button onClick={addTask}>Add</button>
//         <ul>
//           {
//             tasks.map((t, index)=>(
//              <li key={index}>{t}</li>
//             ))
//           }
//         </ul>
        
//     </div>
//   );
// }

// export default App;

import {useState} from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export default function App(){
   const [tasks, setTasks]=useState([]);
   const [task, setTask]=useState("");

   const addTask=()=>{
     if(task.trim()==="") return;
     setTasks([...tasks,task]);
     setTask("");
   }
   return(
      <div>
        <h1>TODO LIST</h1>
        <h3>add the lists u want</h3>
        <input value={task} placeholder="Task" onChange={(e)=>setTask(e.target.value)}></input>
        <button onClick={addTask}>Add</button>
        <ul>
          {
            tasks.map((t, index)=>
            <li key={index}>
               {t}
            </li>)
          }
        </ul>
      </div>
   )
}


