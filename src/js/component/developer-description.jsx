import React from "react"; 

export const DeveloperDescription = ({developerName,developerTitle}) => {
    return (<>
         <div className="about-us__developer-description">
          <span className="about-us__developer-description-name">{developerName}</span>
          <span className="about-us__developer-description-title">{developerTitle}</span>
         </div>
    </>)
  }