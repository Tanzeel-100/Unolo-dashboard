import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Attendance from '../Attendance';
import Teams from '../Teams';
import Chart from '../Chart';
import Forms from '../Forms'
import Photos from '../Photos'
import Expense from '../Expense'
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { navbarTabs } from '../../Constants';
import {IoArrowDown} from "react-icons/io5";
import './style.css'
import LowerNav from '../LowerNav'

const index = () => {
  return (
    <Tabs
      defaultActiveKey="Overview"
      id="uncontrolled-tab-example"
      className="lowerNav-tabs"
    >
      {/* <img src={navbarTabs[0].url} style={{height: "20px",margin: "10px"}}/>      */}
      <Tab eventKey="Overview" title="Overview" className='lowerNav-tab'>
        <div style={{display:'flex',justifyContent:'space-between',margin:'10px',marginTop:'30px'}} className=''>
            <h5>Realtime Dashboard</h5>
            <Button variant="primary" className='attendance-status-button'>
              <IoArrowDown className='attendance-status-arrow'/>
                Attendance Status
            </Button>{' '}
        </div>
        <Container>
          <Row>
          <Col sm={6} >      
              <Chart/>
              <Attendance/>
              <div className='half-cards-wrap'>
                  <Forms/>
                  <Photos/>
              </div>
          </Col>
          <Col sm={6} >
              <Teams/>
              <Expense/>
          </Col> 
          </Row>
        </Container>
      </Tab>
      <Tab eventKey="Live Location" title="Live Location" className='tab'>
        Tab content for Live location
      </Tab>
      <Tab eventKey="Timeline" title="Timeline" className='tab'>
        Tab content for Timeline
      </Tab>
      <Tab eventKey="Card View" title="Card View" className='tab'>
        Tab content for Card view
      </Tab>
      <Tab eventKey="Compliance Status" title="Compliance Status" className='tab'>
        Tab content for Compliance Status
      </Tab>
      <Tab eventKey="Site Attendance" title="Site Attendance" className='tab'>
        Tab content for Site Attendance
      </Tab>
    </Tabs>
  )
}

export default index