import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'


export function Header() {

    return (
        <section className='header-container'>

            <nav className='nav-bar-container'>
                <div className="logo-container flex justify-center align-center">
                    <div className='logo-symbol-container flex  align-center'>
                        <span className='logo-ball-black'></span>
                        <span className='logo-ball-blue'></span>
                    </div>
                    <h1>ReadyRent</h1>
                </div>
                <div className="nav-links-container flex">
                    <a>Home</a>
                    <a>About Us</a>
                    <a>How to use</a>
                </div>
            </nav>

        </section>
    )
}