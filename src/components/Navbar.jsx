import React from 'react'
import logo from '../assets/icons/comic.png'

function NavBar() {
    return (

        <nav className="navbar position: fixed z-99 navbar-dark bg-dark">
            <div className="container-fluid">
             <img src={logo} style={{width:"100px", height:"50px", marginLeft:"80px"}}/>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    
   )


}

export default NavBar
