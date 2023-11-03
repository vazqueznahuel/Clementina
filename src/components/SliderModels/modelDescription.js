import React from "react"

const Info = ( {description, title, school, unlockState} ) => {
   return(
    <div style={{ textAlign: 'center'}}>
        {unlockState ? 
        <>
         <h1>{title}</h1>
         <h2 >{school}</h2>
         <p>{description}</p>
        </>  
        :    
        <h1>.</h1>
        } 
        
    </div>
   )
}

export default Info