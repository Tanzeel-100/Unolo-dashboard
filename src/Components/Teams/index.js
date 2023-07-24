import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { teams } from '../../Constants';
import Table from 'react-bootstrap/Table';
import TextField from '@mui/material/TextField';
import './style.css'
import { IoSearchSharp } from "react-icons/io5";
import InputAdornment from '@mui/material/InputAdornment';

function getRandomColor() {
    const mainColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet","pink","brown"];
    const randomIndex = Math.floor(Math.random() * mainColors.length);
    return mainColors[randomIndex];
}

function getFirstCharacters(fullName) {
    const nameParts = fullName.trim().split(/\s+/);
    const initials = nameParts.map((name) => name.charAt(0).toUpperCase());
    return initials.join('');
}

const index = () => {
  return (
    <Card className='card-wrap'>
      <Card.Body>
        <div style={{display:'flex',justifyContent:'space-between',marginBottom:'20px'}}>
            <Card.Title className='card-title'>My Teams</Card.Title>
            <div className='text-field-wrap'>
                <TextField
                    label="Search Here"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <IoSearchSharp />
                        </InputAdornment>
                    ),
                    }}
                    variant="outlined"
                    size='small'
                    sx={{backgroundColor:'#EDEDED'}}
                />
            </div>
        </div>
        <div style={{overflow:'auto'}}>
        <Table bordered size="sm" className='teams-table'>
            <thead style={{backgroundColor:'#eee'}}>
                <tr>
                    <th>Employee</th>
                    <th>Attendance</th>
                    <th>Last Location</th>
                </tr>
            </thead>
            <tbody>
                {teams.map((team)=>(
                    <tr>
                        <td className='employee-wrap'>
                            <div style={{borderLeft:`3px solid ${getRandomColor()}`}} className='employee-border'>
                                <div className='employee-icon'>
                                    {getFirstCharacters(team.employee).toUpperCase()}
                                </div>
                                <div style={{width:'120px'}}>
                                    {team.employee}
                                </div>
                            </div>
                        </td>
                        <td className='teams-attendance'>
                            {team.attendance}
                        </td>
                        <td className='teams-location'>
                            {team.lastLocation}
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </div>
      </Card.Body>
    </Card>
  )
}

export default index