import React, {useEffect, useState} from 'react'
import { useLocation } from "react-router-dom";

const ShowComponents = ({children}) => {

  const location = useLocation();
  const studentRole = sessionStorage.getItem("role");
  const [ShowComponents, setShowComponents] = useState(false)

  useEffect(()=>{
  
      if (location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/'  ){
        setShowComponents(false)
    }else{
        setShowComponents(true)
    }
      
    
  
  }, [location])
  
  return (
    <div>
        {ShowComponents && children}
    </div>
  )
}

export default ShowComponents
