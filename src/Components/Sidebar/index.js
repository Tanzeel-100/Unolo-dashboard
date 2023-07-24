import React from 'react'
import {Nav} from "react-bootstrap";
import "./style.css";
import { sideNav } from '../../Constants';
import Company_Logo from './../../Images/Company_Logo.png'
import Back from './../../Images/Back.png'
import Settings from './../../Images/Settings.png'
import Help from './../../Images/Help.png'
import { sideNavBottom } from '../../Constants';

function Sidebar() {
    
  return (
    <div className='sidebar-wrap'>
        <div>
            <Nav className="col-md-12 d-none d-md-block sidebar"
            activeKey="/home"
            onSelect={selectedKey => console.log(selectedKey)}
            fill variant='tabs'
            >
            <img src={Company_Logo} className='company-logo'/>
            {sideNav.map((item)=>
                <Nav.Item className='sidebar-tabs-body'>
                    <div className='side-bar-tabs'>
                        <Nav.Link href="/home" className='sidebar-tab' style={{display:'flex',flexDirection:'row'}}>
                            <img src={item.url} className='sidebar-tab-icon'/>
                            <div>
                                {item.tabName}
                            </div>
                        </Nav.Link>
                    </div>
                </Nav.Item>
            )}
            </Nav>
        </div>
        <div className='sidebar-bottom-icons'>
            {
                sideNavBottom.map((item)=>(
                    <img src={item.url} className='sidebar-bottom-icon'/>
                ))
            }
            </div>
    </div>
  )
}

export default Sidebar