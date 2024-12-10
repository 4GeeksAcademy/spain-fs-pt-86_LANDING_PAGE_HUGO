import React from "react";
import { DeveloperDescription } from "./developer-description.jsx";

export const DeveloperCard = (props) => {
	return ( <>
  <div className="about-us__developer-card">
    <img className="about-us__developer-card-img" src= {props.image}/>
    <DeveloperDescription {...props}/>
    </div>
    </>);
}