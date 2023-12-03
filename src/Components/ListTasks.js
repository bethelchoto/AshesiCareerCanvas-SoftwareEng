import { useState, useEffect } from "react";
import "../Styles/Resume.css";

const ListTasks = ({tasks, setTasks}) =>{

    const [todos, setTodos] = useState([]); // change todos to master CV
    const [inProgress, setInProgress] = useState([]);// Ashesi Formate CV
    const [closed, setClosed] = useState([]); // 


    useEffect(() => {
        const filterTodos = tasks.filter((task) => task.status === "todo");
        const filterInProgress = tasks.filter((task) => task.status === "inprogress");
        const filterClosed = tasks.filter((task) => task.status === "closed");

        setClosed(filterClosed)
        setInProgress(filterInProgress)
        setTodos(filterTodos)

    }, [tasks]);

    const statuses = ["todo", "inprogress", "closed"];

    return (
      <div className="horizontal-bars">
        {statuses.map((status, index) => (
        <Section key={index}  status= {status} tasks ={tasks} setTasks = {setTasks} todos = {todos} inProgress= {inProgress} closed = {closed}/>
        ))}
      </div>
      );
  };

export default ListTasks;

const Section = ({
    status,
    tasks,
    setTasks,
    todos,
    inProgress,
    closed 
}) => {
    return (
    <div>
    <h2>{status}</h2> List
    </div>
    );
};