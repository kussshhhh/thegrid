import React from 'react'

function Header() {
    return(
        <header className='header'>
            <div className='logo'>The Grid</div>
            <input type = "search" placeholder= 'Search Components' className='search-bar'/>
            <div className='auth-buttons'>
                <button className='login-btn'>Login</button>
                <button className='start-selling-btn'>Upload</button>
            </div>
        </header>
    )
}

export default Header ; 

