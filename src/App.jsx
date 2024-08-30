import { BrowserRouter } from "react-router-dom"
import Navbar from "./assets/pages/Navbar"
import Landing from "./assets/pages/Landing"
import './App.css'

const App = () => {
  return (
    <main>
      <Navbar />
      <Landing />
      <BrowserRouter>
      </BrowserRouter>
    </main>
  )
}

export default App
