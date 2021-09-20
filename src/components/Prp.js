import React from 'react'
import { useSelector } from "react-redux";

function Prp() {
    const sele = useSelector(state => state.first.name);
    const second = useSelector(state => state.last.name);


    return (
        <div>
            <h1>
                {sele + second}
            </h1>
        </div>
    )
}

export default Prp
