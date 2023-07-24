import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import HomeBody from './Components/HomeBody';
import Navbar from './Components/Navbar'

const Layout = () => {
  return (
    <div style={{backgroundColor:'#E8EAED'}}>
      <Navbar/>
      <HomeBody/>
    </div>
  )
}

export default Layout