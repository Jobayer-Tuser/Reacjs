import React from "react";
import MyProps from "../Props/Index";

const Skills =(props)=>(
<div className="skils">
        <h3>Skils : </h3>
        <ul>
            <li>{props.skillA}</li>
            <li>{props.skillB}</li>
            <li>{props.skillC}</li>
        </ul>
    </div>
)

export default Skills ;