import {Component} from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import CustomizePage from './components/CustomizePage'
import SavePage from './components/SavePage'

class App extends Component{
  render(){
    return(
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/customize' element={<CustomizePage />} />
        <Route path="/save" element={<SavePage />} />
      </Routes>
    )
  }
}

export default App
