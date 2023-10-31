import React from "react"

const Info = ( {description, title, school} ) => {
   return(
    <div style={{ textAlign: 'center'}}>
        <h1>{title}</h1>
        <h2 >{school}</h2>
        <p>{description}</p>
    </div>
   )
}

export default Info