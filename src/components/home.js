import React,{useRef, useState} from 'react';
import "./home.css"
import { useSelector } from "react-redux";
import {Toprint } from "./Toprint" ;
import { useReactToPrint } from "react-to-print";
import one from "./download-10.png"
import two from "./download-11.png"
import three from "./download-12.png"

export var name= "my name is muyiwa lateef"
function Home() {
    
    const sele = useSelector(state => state.first.name);
    const second = useSelector(state => state.last.name);
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content : ()=> componentRef.current ,
    })

    var spl = second;
    const[show , setShow] = useState("nshow")
    const[sh , setSh] = useState("show-page")

   
    var que = true

    const handler = ()=>{
        que = !que
                
                if(que){
                    setSh("show");
                    setShow("nshow")
                }else{
                    setSh("hide");
                    setShow("show")
                }
                
    }
            


    return (
        <div className="kini" >
           
            <h4 className="hello" >{`Hello, ${sele}`}</h4>
            <h4 className="single" >{spl[1]}</h4>

            <div className="imagi" >
                <img src={two} alt="first" className="flower" />
                <img src={one} alt="first" className="card" />
                <img src={three} alt="first" className="boy" />
            </div>

          <div className="container">

          
            <div className={show} id="cont"><Toprint ref={componentRef}  /></div>

            <button onClick={handler} className="rev" >{sh}</button>

            <button onClick = {handlePrint} className="prin" >print-page</button>


            

            </div>

        </div>
    )
    
}

export default Home

