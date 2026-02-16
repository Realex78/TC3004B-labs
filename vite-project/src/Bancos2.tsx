import react from 'react'

import { bancos } from './clases/bancos.js';

const Bancos2 = () => {
    return (
        <ul>
            { bancos.map((banco) => <li key={banco.id}>{banco.name}</li>)}
        </ul>
    )
}

export default Bancos2;