import React, { Component } from "react";
import Nav from '../Nav'
import './Header.css'


class Header extends Component {
  render() {
    return (
      <header className='header'>
        <div className="px-3 py-2 bg-dark text-white">
        <h1>To-Do</h1>
        <Nav />
        </div>
      </header>
    )
  }
}
export default Header;
