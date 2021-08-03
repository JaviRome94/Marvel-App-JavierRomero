import React from 'react'
import videito from '../assets/video/Marvel-Studios.mp4'

function Header() {

    return(
        
        <header className="header">
            <div className="header-video">
                <video className="video" src={videito} autoPlay loop muted />
            </div>
            <div className="header-overlay" />
        </header>
    )
    
}

export default Header