import { NavLink, Route } from '@solidjs/router'
import { Component } from 'solid-js'

const Nav: Component = () => (
  <div class='bg-slate-500 h-full'>
    <div class='mx-8 text-center space-y-2'>
      <div>
        <li class='list-none'>
          <ul>
            <NavLink href='/' class='block'>Home</NavLink>
          </ul>
        </li>
      </div>
      <div class='list-none'>
        <li>
          <NavLink href='Notes' class='block'>Notes</NavLink>
        </li>
      </div>
    </div>
  </div>
)

export default Nav