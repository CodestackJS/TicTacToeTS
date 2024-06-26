import React, { useState } from 'react'




const Square = ({value, onSqareclick}) => {


    // const [value, setValue] = useState(null);

    // const handleClick = () => {
    //     setValue('X')
    // }
    
  return (
    <>
    
    <button className="square" onClick={onSqareclick}>
        {value}
        
    </button>

    
    
    </>
  )
}

export default Square