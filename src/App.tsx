import type { Component } from 'solid-js'

import Nav from './components/Nav'
import { Route, Routes } from '@solidjs/router'
import Home from './pages/Home'
import Notes from './pages/Notes'


const App: Component = () => (
  <div class='display: flex'>
    <div class='flex-1 w-1/6'>
      <Nav />
    </div>
    <div class='flex-2 w-5/6'>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='Notes' element={ <Notes /> } />
      </Routes>
    </div>
  </div>
)

export default App