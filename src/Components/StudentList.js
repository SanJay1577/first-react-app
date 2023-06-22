import { useState } from "react"
import Base from "../BasePage/Base"
import { AppState } from "../Context/AppProvider"
import CrumBar from "./CrumBar"
import StudentCard from "./StudentCard"

function StudentList(){
    const {studentData} = AppState()



    return (
        <Base>
        <CrumBar/>
            {studentData.slice(0, 2).map((stud, idx)=>(
                <StudentCard
                student={stud}
                key={idx}
                />
            ))}
            
<div className="join">
  {
    [...Array(Math.ceil((studentData.length/2)))].map((_, index)=>(
        <button
         className={`join-item btn btn-md `}>{index+1}</button>     
    ))
  }

</div>
        </Base>
    )
}
export default StudentList