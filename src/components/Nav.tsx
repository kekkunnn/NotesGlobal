import { NavLink, Route } from '@solidjs/router'
import { Component } from 'solid-js'

const Nav: Component = () => (
  <div class=''>
    <ul class='list-none m-0 p-0 overflow-hidden bg-slate-400'>
      <li class='float-left'>
        <NavLink href='/' class='text-center p-3'>Home</NavLink>
      </li>
      <li class='float-left'>
        <NavLink href='Notes' class='text-center px-3'>Notes</NavLink>
      </li>
      <li class='float-right active:bg-black'>
        <NavLink href='About'class='text-center px-3'>About</NavLink>
      </li>
    </ul>

  </div>
)

export default Nav