import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap';

    
const Form = ({setSunSetRise}) => {
    const [ location, setLocation ] = useState({})
    const [ countries, setCountries] = useState([])
    const [ date, setDate] = useState(new Date())
    
    useEffect(() => {
        axios
        .get('/countries')
        .then(response => {
            setCountries(response.data.map(country=>{
            return { value: {'lng':country.longitude, 'lat':country.latitude}, label: country.name}
            }))
        })
    }, [])
  
    const showSunSetRise = event => {
        event.preventDefault()
        if( Object.keys(location).length > 0 ){
          const url = '/sunriseset/' + location.value.lat + '/'  + location.value.lng + '/'  + date.toISOString().substring(0, 10)
          
          axios
            .get(url)
            .then(response => {
              if (response.data.error){
                console.log(response.data.err_msg)
              }else{
                setSunSetRise({'show':true,'sunset':response.data.results.sunset,'sunrise':response.data.results.sunrise})}
              }
            )
            .catch(error => console.log(error))
        }else{
          alert('Please choose country')
        }
    }
    
    return (
        <div>
            <form onSubmit={showSunSetRise}>
                <Row>
                    <Col sm="6" xs="12">
                        <DatePicker
                        selected={date}
                        onChange={date => setDate(date)}
                        />
                    </Col>
                    <Col sm="6" xs="12" >
                    <Select 
                        options={countries} 
                        onChange={(selected => setLocation(selected))}
                        placeholder={'select country'}
                    />
                    </Col>
                </Row>
                <Row><Col xs="12"><button type="submit">Show</button></Col></Row>
            </form>
        </div>
    )
};

export default Form 