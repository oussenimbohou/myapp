import React from 'react'
import Flowers from './Components/Flowers'
import './index.css'
import FlowerDatas from './Components/FlowerDatas'

const App = () => {
  return (
    <>
        <h1>About Flower</h1>
        <div className='container'>
          {FlowerDatas.map(Flowers)}
        </div>
    </>
  )
}

export default App
