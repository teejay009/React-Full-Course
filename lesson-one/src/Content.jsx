import React from 'react'
import { useState } from 'react'

const Content = () => {

  const [name, setName]= useState('kenny')


    const handleNameChange = () => {
            const names = ["Hassan", "Jawad", "Muhmeen"]
            const int =Math.floor(Math.random() * 3)
            setName(names[int]);
          }
          const handleClick = () => {
            console.log("you click it");
            
          }
          const handleClickOne = (names) => {
            console.log(`${names} was clicked`)
          }

          const handleClickTwo = (e) => {
            console.log(e.target.innerText);
          }
  return (
    <main>
<p>
Hello {name};

</p>
<button onClick={handleNameChange}>Change </button>
<button onClick={() => handleClickOne('Ade')}>Call name </button>
<button onClick={(e) => handleClickTwo(e)}>Click Now </button>

    </main>
      
    
  )
}

export default Content
