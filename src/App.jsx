import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashborad.jsx'

function App() {
  const [name,setName]= useState("shwetha")
  const [occ,setOcc]= useState("developer")

  function nameChange(){
    setName("saa")
    console.log("name changed",name)
  }
  function changeOcc(){
    setOcc("designer")
    console.log("changeOcc",occ)
  }
  return(
<Dashboard name={name} occ={occ} nameChange={nameChange} changeOcc={changeOcc}>

</Dashboard>

  )
}
 

export default App
