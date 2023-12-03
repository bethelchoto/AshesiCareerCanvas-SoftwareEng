import { useState } from "react";
import toast from "react-hot-toast";
import { json } from "react-router-dom/dist";
import { v4 as uuidv4 } from "uuid";

const CreateTask = ({tasks, setTasks}) =>{
  const [task, setTask] = useState({
    id:"",
    name:"",
    status:"Master CV", //can also be ashesi CV formate
  });
  console.log(task)

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(task.name.length < 3) 
      return toast.error("A task must have more than 3 characters");


    if(task.name.length > 100) 
      return toast.error("A task must not be more than 100 characters");

    setTasks((prev) => {
      const list = [...prev, task]
      localStorage.setItem('tasks', JSON.stringify(list));
      return list
    });

    toast.success("Task Created ")
    setTask({
      id:"",
      name:"",
      status:"Master CV",
    })
  };

    return (
      <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
            value={task.value}
              type="text"
              name="email"
              className="form-control"
              style={{ width: '150px' }}
              onChange={(e)=>setTask({...task, id: uuidv4(), name:e.target.value})}
            />

            <button className="main-primary-btn">
              Create Task
            </button>
          </div>
      </form>
    );
  }

export default CreateTask;
