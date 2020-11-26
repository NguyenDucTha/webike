import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';

export const MotorItemType = (props) => {
  return (
    <>
      <Card style={{ margin: '5px' }}>
        <Card.Img variant="top" src="images/364_airblade-110.jpg"/>
        <Card.Body style={{ padding: '0px' }}>
          <Card.Title style={{ margin: '0px', marginBottom: '10px', paddingLeft: '5px', fontWeight: '700' }}>Honda Sh 150i</Card.Title>
        </Card.Body>
      </Card>
    </>
  )
}