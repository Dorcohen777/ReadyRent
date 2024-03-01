import React from 'react'
import { Routes, Route } from 'react-router'


// pages
import { Header } from './pages/header'
import { Hero } from './pages/hero'

// components
import { SignupPage } from './cmps/signup'
import { LoginPage } from './cmps/login'


export function RootCmp() {

    return (
        <main className='main-layout'>
            <div>
                <Header />
                <Routes>
                <Route path='/' element={<Hero/>}/>
                <Route path='/sign-up' element={<SignupPage/>}/>
                <Route path='/sign-in' element={<LoginPage/>}/>
                </Routes>
            </div>
        </main>
    )
}


