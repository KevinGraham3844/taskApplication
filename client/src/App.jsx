import { Routes, Route, useNavigate } from 'react-router-dom'
import FrontPage from './components/FrontPage'
import LoginPage from './components/LoginPage'

const App = () => {
  const navigate = useNavigate()

  return (
    <Routes>
      <Route path='/' element={<FrontPage navigate={navigate}/>} />
      <Route path='/login' element={<LoginPage/>} />
    </Routes>
  )
}

export default App

