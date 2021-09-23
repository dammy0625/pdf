import React,{useState} from 'react';
import { Action,Text,Last,Head } from "./Action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import "./first.css"
import one from "./download-20.png"
import two from "./download-21.png"
import three from "./download-19.png"




function First() {
    const dispatch = useDispatch()
   
    const [first, setFirst] = useState(" ")
    const [last, setLast] = useState(" ")
    const [head, setHead] = useState(" ")
    const [text, setText] = useState("")
    const [borderf, setBorderf] = useState("")
    const [borderl, setBorderl] = useState("")
    const [borderh, setBorderh] = useState("")
    const [save, setSave] = useState("sve")
    
    var ir = false

    function handlef (e){
        setFirst(e.target.value);
        if(first.length > 4){
            setBorderf("blue")
        }
        else{
            setBorderf("red")
        
        }
    }
    function handlet (e){
        setText(e.target.value);
        
    }
    
    function handleh (e){
        setHead(e.target.value);
        if(head.length > 4){
            setBorderh("blue")
        }
        else{
            setBorderh("red")
        
        }
    }

    function handlel (e){
        setLast(e.target.value)
        if(last.length > 4){
            setBorderl("blue")
            ir =true
        }
        else{
            setBorderl("red")
            
        }

        if( ir){
            setSave("save")
                }else{
                    setSave("sve")
                }
        
    }


 
    
    return (
        <div>
            <h2 className="pdf" >PDF Builder</h2>
            <h6 className='keep' >
            keep ideas alive by documenting on the go..<br></br>
            Build simple pfd pages with your name , heading and body .
            </h6>

            <div className="image" >
                <img src={two} alt="first" className="flower" />
                <img src={one} alt="first" className="card" />
                <img src={three} alt="first" className="boy" />
            </div>

        <form className="form" >
        <label for="first">First name</label>
            <input type = "text" id="first" onChange={handlef} value = {first} className={borderf}></input>


        <label for="last">last name</label>
            <input type = "text" id="last" onChange={handlel} value = {last} className={borderl}></input>
        
        <label for="head">header</label>
            <input type = "text" id="head" onChange={handleh} value = {head} className={borderh}></input>
        
        </form>


        <textarea className="area"  rows="15" onChange={handlet} value={text} placeholder="Type content here.." > </textarea>
        


        <Link to="/home" >
        <button onClick={()=>{
dispatch(Action(first)) ;
dispatch(Last(last)) ;
dispatch(Head(head));
dispatch(Text(text))


        }} className={save} >save</button></Link>




        </div>
    )
}

export default First
