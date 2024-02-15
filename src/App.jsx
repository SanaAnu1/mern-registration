import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './Components/Header'
import Register from './pages/Register'
import StudentList from './pages/StudentList'
function App() {

  return (
    <>
    <Header></Header>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/studentlist' element={<StudentList/>}></Route>
      <Route path='/*' element={<Home/>}></Route>

      </Routes>
    </>
  )
}

export default App
