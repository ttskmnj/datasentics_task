import React from 'react'
import { Row, Col } from 'react-bootstrap';


const SunSetRiseResult = ({sunSetRise}) => {
    if( sunSetRise.show ){
        return (
            <div className='sunsetrise'>
            <Row>
                <Col xs="12">sunrise: {sunSetRise.sunrise}</Col>
            </Row>
            <Row>
                <Col xs="12">sunset: {sunSetRise.sunset}</Col>
            </Row>
            </div>
        );
    }else{
        return <div></div>
    }
  }

export default SunSetRiseResult 