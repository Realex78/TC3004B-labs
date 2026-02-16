import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import './clases/strings.ts'
import './clases/array.ts'
import './clases/objetos.ts'
import './clases/funciones.ts'
import './clases/import.ts'
import Bancos from './Bancos.tsx'
import HolaMundo from './HolaMundo.tsx'
import Variable from './Variable.tsx'
import Bancos2 from './Bancos2.tsx'
import { HelloWorld } from './components/HelloWord';
import { UserProfile } from './components/UserProfile';
import { BankList } from './components/BankList';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HolaMundo></HolaMundo>
    <Variable></Variable>
    <Bancos2></Bancos2>
    <Bancos></Bancos>
    <HelloWorld />
    <hr />
    <UserProfile />
    <hr />
    <BankList />
  </StrictMode>,
)
