import React from 'react'
import { Link, NavLink } from 'react-router-dom' 

export const NavBar = () => {
  return (
    <>
        <div className="collapse" id="navbarToggleExternalContent" ref={menuRef}>
            <div className="bg-dark p-4">
                <h5 className="text-white h4">Menu</h5>
                <ul className="navbar-nav">
                    <li>
                        <Link
                        className='nav-link text-white'
                        to="/"
                        >Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link
                            className='nav-link text-white'
                            to="/contacto"
                            >Contacto</Link>

                    </li>
                </ul>
            </div>
        </div>
    </>

  )
}
