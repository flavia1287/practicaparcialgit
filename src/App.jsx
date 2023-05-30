import { useState } from 'react'
import './App.css'
import Tarjeta from './Components/Tarjeta'
import Formulario from './Components/Formulario'

function App() {
  const [bday, setBday
  
  return (
    <>
      <Formulario setBday={setBday}/>
      <Tarjeta bday={bday} styles={}/>
  )
}

export default App
