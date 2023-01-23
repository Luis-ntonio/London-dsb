import React from 'react'
import ParticleBackground from 'react-particle-backgrounds'
import './App.css'
import {Dashboard } from './components/GraphicSquare/GraphicSquare.js'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { Sidebar } from './components/Sidebar/Sidebar.jsx'
import { GraphicSquare } from './components/GraphicSquare/GraphicSquare.jsx'

const App = () => {

  const settings = {
    canvas: {
      canvasFillSpace: true,
      width: 1000,
      height: 1000,
      useBouncyWalls: false
    },
    particle: {
      particleCount: 100,
      color: '#FD673A',
      minSize: 10,
      maxSize: 15
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 360,
      minSpeed: 1,
      maxSpeed: 3
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 3000
    }
  }

  return (
    <>
    <Navbar/>
    <div className='Cont'>
      <Sidebar/>
      <Dashboard>
        <GraphicSquare/>
        <GraphicSquare/>
        <GraphicSquare/>
        <GraphicSquare/>
      </Dashboard>
      <ParticleBackground settings={settings} />
    </div>
    </>
  )

}

export default App