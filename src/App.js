import React, {useState} from 'react'; 
import Header from './components/Header'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login'  ;
import Upload from './components/Upload' ;
import Signup from './components/Signup';




function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false) ;
  const [username, setUsername] = useState('') ;
  const [token, setToken] = useState('')  ;

  const handleLogin = (user, userToken) => {
    setIsLoggedIn(true) ;
    setUsername(user) ;
    setToken(userToken) ;
  } ;

  const handleLogout = () => {
    setIsLoggedIn(false) ;
    setUsername('') ;
    setToken('') ;
  } ;


  return (
    <Router>
        <div className='App'>
          <Header isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout}/>
          <Routes>
            <Route path = '/' element={<HomePage/>} />
            <Route path = '/login' element={<Login onLogin={handleLogin}/>} />
            <Route path = '/signup' element={<Signup/>} />
            <Route path = '/upload' element = {isLoggedIn ? <Upload token={token}/> : < Navigate to = '/login'/>} />
          </Routes>
          <Navigation/>
          <HomePage/>
        </div>
    </Router>
  )
}

export default App ;