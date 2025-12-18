import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashborad.jsx'

function App() {
  let name="john"
  let occupation="developer"
  return(
<Dashboard name={name} occupation={occupation} >

</Dashboard>

  )
}
 

export default App
