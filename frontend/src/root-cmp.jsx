import React from 'react'
import { Routes, Route } from 'react-router'


// pages
import { Header } from './pages/header'
import { Hero } from './pages/hero'

// components
import { LoginSignup } from './cmps/login-signup'

export function RootCmp() {

    return (
        <main className='main-layout'>
            <div>
                <Header />
                <Routes>
                <Route path='/' element={<Hero/>}/>
                <Route path='/sign-up' element={<LoginSignup/>}/>
                </Routes>
            </div>
        </main>
    )
}


