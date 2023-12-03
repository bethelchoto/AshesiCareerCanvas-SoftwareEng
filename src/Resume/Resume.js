import { useState } from "react";
import "../Styles/Resume.css";
import CreateTask from "../Components/CreateTasks";
import ListTasks from "../Components/ListTasks";
import { Toaster } from 'react-hot-toast';


function Resume() {
    const [tasks, setTasks] = useState([]);

    console.log("tasks", tasks)

    useState(()=> {
      setTasks(JSON.parse(localStorage.getItem("tasks")))
    }, [])

    return (
      <>
        <Toaster/>
        <div className="main-body">
           <CreateTask tasks ={tasks} setTasks = {setTasks}/>
           <ListTasks tasks ={tasks} setTasks = {setTasks}/>
      </div>
      </>
      
    );
  }

export default Resume;

