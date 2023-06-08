import { useState } from "react"
import Button from "./Button"

 export  function StudentCard({name, batch, education, acceptCount, setAcceptCount}){
    const [show, setShow] = useState(true)
  
    function handleAccept(){
      setShow(!show)
      setAcceptCount(acceptCount+1)
    }
  
    function handleReject(){
      setShow(!show)
      setAcceptCount(acceptCount-1)
      
    }
    return (
      <div className='student-card'>
        <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ50haIo6IibH--JO8V4wJT_FGTLu3zECwg5EK_VQoT&s"
         alt="name"/>
        <h3>{name}</h3>
        <p>{batch}</p>
        <p>{education}</p>
  
      {
      show ?   <Button 
      customClass='accept-btn btn'
      onClickFunc={handleAccept}
        >Accept</Button> 
        :    
        <Button 
        customClass='reject-btn btn'
        onClickFunc={handleReject}
        >Reject</Button>
      }
        
  
      </div>
    )
  }



