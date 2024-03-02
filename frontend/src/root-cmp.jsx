import React from 'react'
import { Routes, Route } from 'react-router'


// pages
import { Header } from './pages/header'
import { Hero } from './pages/hero'

// components
import { SignupPage } from './cmps/signup'
import { UserDashboard } from './cmps/user-dashboard'


export function RootCmp() {

    return (
        <main className='main-layout'>
            <div>
                <Header />
                <Routes>
                    <Route path='/' element={<Hero />} />
                    <Route path='/sign-up' element={<SignupPage />} />
                    <Route path='/userDashboard' element={<UserDashboard/>} />
                </Routes>
            </div>
        </main>
    )
}


