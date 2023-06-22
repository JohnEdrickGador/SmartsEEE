import React from 'react'

export default function NavBar() {
  return (
    <div className='nav-bar'>
        <div className='hamburger-lines'>
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
        </div>
        <div className='app-logo'>
            <h1>Monitor</h1>
        </div>
        <div className='directory'>
            <a href='/dashboard'>Dashboard</a>
            <a href='#'>Graphs</a>
        </div>
    </div>
  )
}
