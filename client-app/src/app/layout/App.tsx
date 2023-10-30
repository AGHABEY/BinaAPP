import { useEffect,useState } from 'react'
import axios from 'axios'
import {  Container } from 'semantic-ui-react';
import { Apartments } from '../models/apartments';
import NavBar from './NavBar';
import AparmentDashboard from '../../apartments/dashboard/ApartmentDashboard';


function App() {
  const [apartments, setApartments]=useState<Apartments[]>([]);

  useEffect(()=>{
       axios.get<Apartments[]>('http://localhost:5000/api/ApartmentsContoller')
       .then(
        response=>{
          setApartments(response.data)
        }
       )
  },[])

  return(
    <>
    <NavBar/>

      <Container style={{marginTop:'7em'}}>
      <AparmentDashboard apartments={apartments}/>
       </Container>

    </>
  )
}

export default App
