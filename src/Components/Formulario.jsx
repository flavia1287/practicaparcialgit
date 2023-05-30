import React from 'react'

const Formulario = ({setBday}) => {
  return (
    <div>
        <label>Nombre del cumpleañero</label>
      <input type="text" onChange={(e)=> setBday ((prevState)=>({...prevState, name:e.target.value}))} />
      <label >Fecha: </label>
      <input type="date" onChange={(e)=> setBday((prevState)=>({...prevState, date:e.target.value}))} />
      <label >Nombre del invitado: </label>
      <input type="date" onChange={(e)=> setBday((prevState)=>({...prevState, guest:e.target.value}))} />
      <label >Fondo:</label>
      <select>
        <option value="transparent"></option>
        <option value="black"></option>
        <option value="orange"></option>
        <option value="pink"></option>
        <option value="red"></option>
      </select>
      <label >Color de letra:</label>
      <select>
        <option value="transparent"></option>
        <option value="black"></option>
        <option value="orange"></option>
        <option value="pink"></option>
        <option value="red"></option>
      </select>

    </div>
  )
}

export default Formulario