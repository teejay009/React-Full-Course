import  { useState } from 'react'
import './index.css'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
// import ListComponet from './ListComponet'


function App() {
  const [items, setItems] = useState([

    {
        id: 1,
        checked: false,
        item: 'ReactJs'
    },
    {
        id: 2,
        checked: true,
        item: 'Javascript'
    },
    {
        id: 3,
        checked: false,
        item: 'NodeJs'
    },

    ])

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id?{...item, checked: !item.checked} : item)
        setItems(listItems)
        localStorage.setItem('shoppinglist', JSON.stringify(listItems))
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id)
        setItems(listItems)
        localStorage.setItem('shoppinglist', JSON.stringify(listItems))
    }


  return (
    <div className='App'>
      <Header title="Cohort 3 list" />
      <Content items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
      <Footer lengt={items.length} />


  
    

    </div>
  )
}

export default App