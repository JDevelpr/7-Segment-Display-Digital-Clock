import { useState } from 'react'
import './App.css'
import LevelOne from './components/LevelOne';
import LevelTwo from './components/LevelTwo';
import LevelThree from './components/LevelThree';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div className='general-container-level-one'>
      <h1 className='level-tittle'>Level 1</h1>
      <LevelOne number={0} />
    </div>
    <div className='general-container-level-two'>\
      <h1 className='level-tittle'>Level 2</h1>
      <LevelTwo/>
    </div>
    <div className='general-container-level-three'>
      <h1 className='level-tittle'>Level 3</h1>
      <LevelThree/>
    </div>
    </>
  )
}

export default App
