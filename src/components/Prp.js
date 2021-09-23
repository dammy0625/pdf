import React from 'react'
import { useSelector } from "react-redux";
import "./prop.css"
import two from "./download-19.png"

function Prp() {
    const sele = useSelector(state => state.first.name);
    const second = useSelector(state => state.last.name);
    const head = useSelector(state => state.head.name);
    const text = useSelector(state => state.text.name);


    return (
        <div className="conta" >

            <div className="sibi" >

            
            <h5>
                {sele + second}
            </h5>
            <h1>{head}</h1>
            <p>{text}</p>
<img src={two} alt="boy" className="bo" ></img>

            </div>
        </div>
    )
}

export default Prp
