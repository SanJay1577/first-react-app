export default function StudentCard({student}){
    return (
        <div>
    <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
          <h2 className="card-title">{student.name}</h2>
           <p>Batch: {student.batch}</p>
            <p>Email: {student.email}</p>
            <p>Phone: {student.phone}</p>
            <p>EDU  : {student.qualification}</p>
            <div className="card-actions justify-end">
        <button className="btn btn-danger">Delete</button>
         </div>
       </div>
       </div>
        </div>
    )

}

