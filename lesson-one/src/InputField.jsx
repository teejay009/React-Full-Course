import React from 'react'
import {useState} from 'react'

const InputField = () => {
    const [text, setText] =useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }
  return (
    <div className='main'>
        <input type="text" value={text} onChange={handleChange} />
        <p>you are typing: {text}</p>
      
    </div>
  )
}

export default InputField