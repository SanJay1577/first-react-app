import { useSelector } from "react-redux";
import Base from "../BasePage/Base";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Profile(){
    const navigate = useNavigate();
    
    useEffect(()=>{
       if (!localStorage.getItem("token")){
           navigate("/",{replace:true});
       }
    }, [navigate]); 

    const {username, email} = (useSelector((state)=>state.signupInfo.data))

    return (
        <Base>
            
<div class="grid grid-cols-2 grid-flow-row auto-rows-max">
  <div className="bg-base-200">
        <div className="h-10 p-2 m-2"><p className="">first box</p></div>
        <div className="h-10 p-2 m-2"><p className="">first box</p></div>
        <div className="h-10 p-2 m-2"><p className="">first box</p></div>
        <div className="h-10 p-2 m-2"><p className="">first box</p></div>
        <div className="h-10 p-2 m-2"><p className="">first box</p></div>
        <div className="h-10 p-2 m-2"><p className="">first box</p></div>
        <div className="h-10 p-2 m-2"><p className="">first box</p></div>
        <div className="h-10 p-2 m-2"><p className="">first box</p></div>
        <div className="h-10 p-2 m-2"><p className="">first box</p></div>
        <div className="h-10 p-2 m-2"><p className="">first box</p></div>
        <div className="h-10 p-2 m-2"><p className="">first box</p></div>
        <div className="h-10 p-2 m-2"><p className="">first box</p></div>
  </div>

  <div className="bg-base-300">
     <div className="h-10 p-2 m-2"><input placeholder="first key" className="input  input-xs w-full max-w-lg"/></div>
     <div className="h-10 p-2 m-2"><input placeholder="first key" className="input  input-xs w-full max-w-lg"/></div>
     <div className="h-10 p-2 m-2"><input placeholder="first key" className="input  input-xs w-full max-w-lg"/></div>
     <div className="h-10 p-2 m-2"><input placeholder="first key" className="input  input-xs w-full max-w-lg"/></div>
     <div className="h-10 p-2 m-2"><input placeholder="first key" className="input  input-xs w-full max-w-lg"/></div>
     <div className="h-10 p-2 m-2"><input placeholder="first key" className="input  input-xs w-full max-w-lg"/></div>
     <div className="h-10 p-2 m-2"><input placeholder="first key" className="input  input-xs w-full max-w-lg"/></div>
     <div className="h-10 p-2 m-2"><input placeholder="first key" className="input  input-xs w-full max-w-lg"/></div>
     <div className="h-10 p-2 m-2"><input placeholder="first key" className="input  input-xs w-full max-w-lg"/></div>
     <div className="h-10 p-2 m-2"><input placeholder="first key" className="input  input-xs w-full max-w-lg"/></div>
     <div className="h-10 p-2 m-2"><input placeholder="first key" className="input  input-xs w-full max-w-lg"/></div>
     <div className="h-10 p-2 m-2"><input placeholder="first key" className="input  input-xs w-full max-w-lg"/></div>
     </div>
</div>
        </Base>
    )
}