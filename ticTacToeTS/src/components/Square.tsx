import React, { useState } from 'react'

interface SquareProps {
  onSqareclick: () => void;
  value: string;
}


const Square = ({value, onSqareclick}:SquareProps) => {


    // const [value, setValue] = useState(null);

    // const handleClick = () => {
    //     setValue('X')
    // }
    
  return (
    <>
    
    <button className="square " onClick={onSqareclick}>
        {value}
        
    </button>

    
    
    </>
  )
}

export default Square