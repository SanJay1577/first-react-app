
import './App.css';
import React, { useState } from 'react';
import {StudentCard}  from './Components/StudentCard';
import { StateFulComp, StatelessComp } from './Components/statefulComponent';
import Button from './Components/Button';

function App() {

const [acceptCount, setAcceptCount] = useState(0)
  const studentsData = [
    {
      name:"Selvam",
      batch:"B47WD",
      education:"B.E",
    },
    {
      name:"Sanjay",
      batch:"B45WD",
      education:"B.E",
    },
    {
      name:"Baskar",
      batch:"B43WD",
      education:"BCA",
    },
    {
      name:"Naveen",
      batch:"B42WD",
      education:"BSC",
    },
  ]
  return (
<div className="App">
<div>
  <h1>Accepted Students : {acceptCount}</h1>
</div>
<div className='card-block'>
  {studentsData.map((stud,idx)=>(
     <StudentCard
     key={idx}
     name={stud.name}
     batch={stud.batch}
     education={stud.education}
     acceptCount={acceptCount}
     setAcceptCount={setAcceptCount}
     />
  ))}
</div>
{/* <StateFulComp/>
<StatelessComp
name = {"sanjay"}
/> */}

<Button
 background={"crimson"}
 color="white"
 pd="15px"
 m="5px"
 wd="max-content"
 onClickFunc={()=>console.log("custom-btn clicked")}
>
  Add
</Button>

</div>
  ); 
}
// const props={} => 
// props= {
//   name:"",
//    batch:"", 
//    education:""}
//destructuring 
// const {name, batch, education} = props

export default App;






// function Welcome(){
//   const welcomename = "guvi"
//   return(
//     React.createElement("div", {id:"welcome"}, 
//     React.createElement("h1", {}, `Hi how are you ${welcomename}`))
//   )
// }
//jsx -> javascript xml = (html with js)

// functional component
// function Greeting(){
//   //normal js
//   //function
//   //varible
//   const name = "sanjay"

//   return (
//     <div id="greeting" className='greeting-class'>
//       <h1>Hi how are you {name}</h1>
//     </div>
//   )
// }

// virtual DOM
// Components - In depth
// Component life cycle
// export types 
// Stateful and stateless components
// Reusable components 
// Passing dynamic data to component
// Introduction to Hook
{/* <html>
<body>
  <div>
    <h1></h1>
    <div>
      <button></button>
      <p></p>
    </div>
  </div>
</body>
</html> */}