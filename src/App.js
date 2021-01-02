import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Form from './components/Form'
import SunSetRiseResult from './components/SunSetRiseResult'


const App = () => {
  const [ sunSetRise, setSunSetRise ] = useState({'show':false,'sunset':'','sunrise':''})
  
  return (
    <div>
      <Container>
        <Form setSunSetRise={setSunSetRise}/>
        <SunSetRiseResult sunSetRise={sunSetRise} />
      </Container>
    </div>
  );
}

export default App;
