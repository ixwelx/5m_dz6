import { useState } from 'react'
import './App.css'
import {RegistrationForm} from "./components/RegistrationForm/RegistrationForm.jsx";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <RegistrationForm/>
        <ToastContainer />
    </>
  )
}

export default App
