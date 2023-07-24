import React from 'react'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { teamwise_attendance } from '../../Constants';
import './style.css'

const index = () => {

  return (
    <Card className='card-wrap'>
      <Card.Body>
        <Card.Title>Team Attendance</Card.Title>
        <hr/>
        <div style={{ overflow: 'auto' }}>
      <Table borderless>
        <tbody>
          {teamwise_attendance.map((person) => (
            <tr key={person.name}>
              <td style={{ fontWeight: 'bold', width: '50%', whiteSpace: 'nowrap' }}>
                {person.name}
              </td>
              <td>
                <ul style={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
                  <li style={{ color: 'green', fontSize: '30px', margin: '-10px' }} />
                  {person.punchedIn}
                </ul>
              </td>
              <td>
                <ul style={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
                  <li style={{ color: 'orange', fontSize: '30px', margin: '-10px' }} />
                  {person.inactive}
                </ul>
              </td>
              <td>
                <ul style={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
                  <li style={{ color: 'red', fontSize: '30px', margin: '-10px' }} />
                  {person.punchedOut}
                </ul>
              </td>
              <td>
                <ul style={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
                  <li style={{ color: 'skyblue', fontSize: '30px', margin: '-10px' }} />
                  {person.onLeave}
                </ul>
              </td>
              <td>
                <ul style={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
                  <li style={{ color: 'purple', fontSize: '30px', margin: '-10px' }} />
                  {person.weeklyOff}
                </ul>
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