import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom' ;

function Header({isLoggedIn, username, onLogout}) {

    const navigate = useNavigate() ;

    const handleUploadClick = () => {
        if(isLoggedIn){
            navigate('/upload') ;
        }
        else{
            navigate('/login') ;
        }
    }
    
    return(
        <header className='header'>
            <Link to = "/" className='logo'>The Grid</Link>
            <input type = "search" placeholder= 'Search Components' className='search-bar'/>
            <div className='auth-buttons'>
                {isLoggedIn ? (
                    <>
                        <span>Welcome, {username}</span>
                        <button onClick={onLogout} >Logout</button>
                    </>
                ):( 
                    <>
                        <Link to='/login' className='login-btn'>Login</Link>
                        <Link to='/signup' className='signup-btn'>Sign Up</Link>
                    </>
                )}
                <button onClick={handleUploadClick} className='start-selling-btn' >Upload</button>
            </div>
        </header>
    )
}

export default Header ; 

