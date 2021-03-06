import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

export const MotorItemType = (props) => {
  const history = useHistory()
  return (
    <>
      <Card style={{ margin: '5px' }}>
        <Card.Img variant="top" style={{width: '231px', height: '172px'}} src={`images/${props.img}`} />
        <Card.Body style={{ padding: '0px' }}>
          <Card.Title style={{ margin: '0px', marginBottom: '10px', paddingLeft: '5px', fontWeight: '700' }}>{props.name}</Card.Title>
        </Card.Body>
      </Card>
    </>
  )
}