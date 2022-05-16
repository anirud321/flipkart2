import React from 'react'
import './App.css'
import './Navabar.css'
import Navabar from './Navabar';
import Listitem from './Listitem';
import { Carousel } from 'bootstrap';
function App() {
  return (
    <div>
      <Navabar />
      <Listitem />
      {/* <Carousel /> */}
    </div>
  )
}

export default App