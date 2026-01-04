import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  { BrowserRouter,Routes,Route}from 'react-router-dom'
import View from './Pages/View'
import Edit from './Pages/Edit'
import Form from './components/Form'
import Add from './Pages/Add'
import { ToastContainer, toast } from 'react-toastify';
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <a href="/View">View</a>
    <br />
    <a href="/Add">Add</a>
<div>
  <ToastContainer />
  <BrowserRouter>
  <Routes>
    <Route path='/View' element={<View/>}/>
    <Route path='/Add' element={<Add/>}/>
    <Route path='/edit/:id' element={<Edit/>}/>
  </Routes>
  </BrowserRouter>
</div>
 </div>
  )
}

export default App
