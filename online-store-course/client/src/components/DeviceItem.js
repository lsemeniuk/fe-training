import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import star from '../assets/star.png';
import { DEVICE_ROUTE } from '../utils/const';

const DeviceItem = ({ device }) => {
  const history = useHistory();
  return (
    <Col md={3} className='mt-3' onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
      <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
        <Image width={120} height={150} src={device.img} />
        <div className='text-black-50 mt-1 d-flex justify-content-between text-black-50 align-items-center'>
          <div>Samsung...</div>
          <div className='d-flex align-items-center'>
            <div>{device.rating}</div>
            <Image width={18} height={18} src={star} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
