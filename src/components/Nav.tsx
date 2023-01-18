import { Route } from '@solidjs/router'
import { Component } from 'solid-js'

const Nav: Component = () => (
  <div class='container mx-right'>
    <li>
      <ul>Home</ul>
      <ul>Notes</ul>
    </li>
  </div>
)

export default Nav