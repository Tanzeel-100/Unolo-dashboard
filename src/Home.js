import React from 'react'
import Nav from "react-bootstrap/Nav"
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Sidebar from './Components/Sidebar';
import Layout from './Layout';

function Home() {
  return (
        <Container fluid>
            <Row>
                <Col sm={2} >      
                    <Sidebar />
                </Col>
                <Col sm={10} >
                    <Layout/>
                </Col> 
            </Row>
        </Container>
  )
}

export default Home