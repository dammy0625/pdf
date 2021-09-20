import React,{useState} from 'react';
import { Action } from "./Action";
import { Last } from "./Action";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import "./first.css"



function First() {
    const dispatch = useDispatch()
    const sele = useSelector(state => state.first.name);
    const second = useSelector(state => state.last.name);
    
    const [first, setFirst] = useState(" ")
    const [last, setLast] = useState(" ")
    const [borderf, setBorderf] = useState("")
    const [borderl, setBorderl] = useState("")

    function handlef (e){
        setFirst(e.target.value);
        if(first.length > 4){
            setBorderf("blue")

        }
        else{
            setBorderf("red")
        }
        
    }
    function handlel (e){
        setLast(e.target.value)
        if(last.length > 4){
            setBorderl("blue")

        }
        else{
            setBorderl("red")
        }
        
    }
    
    return (
        <div>
        <form>
        <label for="first">First name</label>
            <input type = "text" id="first" onChange={handlef} value = {first} className={borderf}></input>


        <label for="last">last name</label>
            <input type = "text" id="last" onChange={handlel} value = {last} className={borderl}></input>
        
            <h4>{sele}</h4>
            <h6>{second}</h6>




        </form>
        <Link to="/home" >
        <button onClick={()=>{
dispatch(Action(first)) ;
dispatch(Last(last)) ;

        }} >save</button></Link>




        </div>
    )
}

export default First
