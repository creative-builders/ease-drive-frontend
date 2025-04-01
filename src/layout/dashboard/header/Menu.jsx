import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="flex border border-red-950">
        <h2>Ease Drive</h2>
        <ul>
            <li>
            <Link>
            {/* icon */}
            <span>Daily</span>
            </Link>
            </li>
        </ul>
    </div>
  )
}

export default Menu