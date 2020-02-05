import React from 'react'
import { Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'

const App = () => {
  return (
    <div className="App">
      <Route exact path='/' component={LandingPage} />
    </div>
  )
}

export default App
