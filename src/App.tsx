import type { Component } from 'solid-js'

import Nav from './components/Nav'
import { Route, Routes } from '@solidjs/router'
import Home from './pages/Home'
import Notes from './pages/Notes'
import About from './pages/About'


const App: Component = () => (
  <div >
    <Nav />
    <div>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='Notes' element={ <Notes /> } />
        <Route path='About' element={ <About /> } />
      </Routes>
    </div>
  </div>
)

export default App