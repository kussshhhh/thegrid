import React from 'react'; 
import Header from './components/Header'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className='App'>
      <Header/>
      <Navigation/>
      <HomePage/>
    </div>
  )
}

export default App ;