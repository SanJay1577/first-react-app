import Base from "../BasePage/Base"
import StudentCard from "./StudentCard"

function StudentList({studentData}){
    return (
        <Base>
            {studentData.map((stud, idx)=>(
                <StudentCard
                student={stud}
                key={stud.id}
                />
            ))}
        </Base>
    )
}
export default StudentList