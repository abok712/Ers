import { useState } from 'react'
import './App.css'
import Card from './Card.jsx'
import Ers from './Ers.jsx'

function App() {
  return (
    <div className='resume-container'>
      {/* Сол жақ панель: Жеке ақпарат, байланыс және дағдылар */}
      <div className='left-side'>
        <Card />
      </div>
      
      {/* Оң жақ панель: Жұмыс тәжірибесі, білім және туралы */}
      <div className='right-side'>
        <Ers />
      </div>
    </div>
  )
}

export default App;