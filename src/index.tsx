/* @refresh reload */
import { render } from 'solid-js/web'
import { Router } from '@solidjs/router'


import './index.css'
import App from './App'
import Home from './pages/Home'
import Nav from './components/Nav'

render(() =>
  <Router>
    <div><Nav /></div>
    <Home />
  </Router>,
document.getElementById('root') as HTMLElement
)