import React from 'react'
import {Home,NavBar,About,Skills,Footer} from '../components/index.js'

export const Portfolio = () => {
  return (
    <>
    <header>
        <NavBar></NavBar>
    </header>
    <main>
        <Home></Home>
        <h2 className="section-title">About me</h2>
        <About></About>
        <Skills></Skills>
    </main>
    <Footer></Footer>
    </>
  )
}
