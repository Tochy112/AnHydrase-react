import React from 'react'
import { useState } from 'react'

const New = () => {
    const [Update, setUpdate] = useState("WELCOME TO MY PAGE");

    const change = () => {
        setUpdate("This tag has been updated");
    }

  return (

    <div>

        <h1>{Update}</h1>
        
        <button onClick={change}>Click to update</button>

    </div>
  )
}

export default New