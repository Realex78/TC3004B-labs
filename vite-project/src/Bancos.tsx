import React from 'react'
import { bancos } from './clases/bancos.js'

const Bancos = () => {
  return (
    <div>
        <h1>Listado de Bancos</h1>

        <ul>
            { bancos.map((a) => (
                <li key={a.id}>{a.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Bancos