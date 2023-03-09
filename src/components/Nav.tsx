import { NavLink, Route } from '@solidjs/router'
import { Component } from 'solid-js'
import './Nav.css'

const Nav: Component = () => (
  <div class=''>
    <ul class='list-none m-0 p-4 overflow-hidden bg-slate-600 text-blue-400'>
      <li class='float-left'>
        <NavLink activeClass='btnAct' href='/' class='navBtn'>Home</NavLink>
      </li>
      <li class='float-left'>
        <NavLink activeClass='btnAct' href='Notes' class='navBtn'>Notes</NavLink>
      </li>
      <li class='float-right'>
        <NavLink activeClass='btnAct' href='About' class='navBtn'>About</NavLink>
      </li>
    </ul>

  </div>
)

export default Nav