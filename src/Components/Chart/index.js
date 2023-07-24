import React from 'react'
import Card from 'react-bootstrap/Card';
import {Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    elements
} from 'chart.js'
import {Doughnut} from 'react-chartjs-2';
import './style.css'

ChartJS.register(ArcElement, Tooltip, Legend);

const data={labels: ['Punched in','Inactive','Punched out','On Leave','Weekly off'],
  datasets: [
    {
      label: '# of Employees',
      data: [1,6,15,0,2],
      backgroundColor: [
        'green',
        'orange',
        'red',
        'skyblue',
        'purple',
      ],
      borderColor: [
        'green',
        'orange',
        'red',
        'skyblue',
        'purple',
      ],
      borderWidth: 1,
    },
  ],
};

const index = () => {
  return (
    <Card className='card-wrap'>
      <Card.Body>
        <Card.Title>Attendance Overview</Card.Title>
        <hr/>
        <div style={{display:'flex',justifyContent:'center'}}>
            <div className='pie-chart'>
                <Doughnut
                    data={data}
                    options={{
                        elements: {
                            point: {
                            radius: 0.2, // Decrease the radius of the data points (arc)
                            pointStyle: 'circle'
                        }
                    },
                    rotation: -90,
                    circumference: 180,
                    cutout: '80%', // Decrease the size of the inner cutout area
                    maintainAspectRatio: true,
                    responsive: true,
                    plugins: {
                        legend: {
                          title:{
                            display:false
                          },
                            position: 'top',
                            maxHeight: 100,
                            maxWidth: 100,
                            labels: {
                                boxHeight: 10,
                                boxWidth: 10,
                                borderRadius: 10,
                                pointStyle: 'circle'
                            },
                        }
                    }
                }}
                />
            </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default index