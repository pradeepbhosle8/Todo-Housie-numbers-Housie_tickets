import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HousieGenerator from './Pages/HousieGenerator'
import HousieTicket from './Pages/HousieTicket'
import {Routes, Route, Link} from 'react-router-dom'
import Navbar from './components/Navbar'
import Todochecklist from './Pages/Todochecklist'
import Tailwindcss from './Pages/Tailwindcss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Todochecklist />} />
      <Route path='/tailwindcss' element ={<Tailwindcss />} />
      <Route path="/housie" element={<HousieGenerator />} />
      <Route path="/ticket" element={<HousieTicket />} />
    </Routes>
    </>
  )
}

export default App
