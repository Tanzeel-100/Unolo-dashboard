import React from 'react'
import Card from 'react-bootstrap/Card';
import './style.css'

const index = () => {
  return (
    <Card className='half-wrap'>
      <Card.Body>
        <Card.Title>Photos Uploaded</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default index