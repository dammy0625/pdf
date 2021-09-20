import React,{useRef} from 'react';

import { useSelector } from "react-redux";
import {Toprint } from "./Toprint" ;
import { useReactToPrint } from "react-to-print";

export var name= "my name is muyiwa lateef"
function Home() {
    
    const sele = useSelector(state => state.first.name);
    const second = useSelector(state => state.last.name);
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content : ()=> componentRef.current ,
    })
    return (
        <div>
           
            <h4>{`Hello ${sele}`}</h4>
            <h4>{second}</h4>
            <Toprint ref={componentRef} />
            <button onClick = {handlePrint} >print text</button>
        </div>
    )
}

export default Home

