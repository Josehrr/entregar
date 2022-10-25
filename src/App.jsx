import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles.css'
import users from './users.json'
import quotes from './quotes.json'



function App() {
  const randomIndex = Math.floor(Math.random () * users.length)
  console.log(users)
  const colors = ['#845EC2', '#D65DB1', '#FF6F91', '#FF9671', '#FFC75F']
  const [index,setIndex]= useState(randomIndex)
  const changeUser = ()=>{
    const randomIndex = Math.floor(Math.random () * quotes.length)
    setIndex(randomIndex)
  }
    const randomColor = Math.floor(Math.random () * colors.length)
    document.body.style = `background : ${colors[randomColor]}`

  return (
    
    <div className="App">
      <div className="card" style={{color : colors[randomColor]}}>
        <h1><i class="fa-solid fa-quote-left"></i> {quotes[index].quote} <i class="fa-solid fa-quote-right"></i></h1>
        <h1 className='author'>{quotes[index].author}</h1>
        
        
        
        <button onClick={changeUser}><i className="fa-solid fa-shuffle"></i></button>
      </div>
     
    </div>
  )
}

export default App
