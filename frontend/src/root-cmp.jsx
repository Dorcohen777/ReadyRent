import React from 'react'
import { Routes, Route } from 'react-router'


// pages
import { Header } from './pages/header'
import { Hero } from './pages/hero'

export function RootCmp() {

    return (
        <main className='main-layout'>
            <div>
                <Header />
                <Routes>
                <Route path='/' element={<Hero/>}/>
                </Routes>
            </div>
        </main>
    )
}


