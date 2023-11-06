import React from 'react'

const Button = ({ buttonText, reqType, setReqType }) => {

    return (
        <button className={buttonText === reqType ? "selected" : null}
        type='button'

        onClick={()=>setReqType(ButtonText)}
>
    {buttonText}
    </button>


  )
}

export default Button
