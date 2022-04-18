import React from 'react'

const Header: React.FC = () => {
  return (
    <header>
        <h2>Main metrics</h2>
        <ul>
            <li>Last Hour</li>
            <li>Today</li>
            <li>Yesterday</li>
            <li>Last 3 days</li>
        </ul>
    </header>
  )
}

export default Header