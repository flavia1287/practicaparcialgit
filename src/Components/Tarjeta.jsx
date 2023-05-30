import React from 'react'

const Tarjeta = ({name, date}) => {
  return (
    <div className='tarjeta'>
        <h3>
            Estas invitado al cumple de {name}
        </h3>
        <h4>
            Te espero el dia {} a las 17hs
        </h4>
        <h2>
            ¡¡No faltes!!
        </h2>
        <h4>
            Para:{}
        </h4>
    </div>
  )
}

export default Tarjeta