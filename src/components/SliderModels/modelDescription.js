import React from "react"

const Info = ( {description, title, school} ) => {
   return(
    <div style={{margin: '20px', textAlign: 'center'}}>
        <h1 style={{margin: '-20px'}}>{title}</h1>
        <h2 >{school}</h2>
        <p>{description}</p>
    </div>
   )
}

export default Info