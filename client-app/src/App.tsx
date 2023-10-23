import { useEffect,useState } from 'react'
import './App.css'
import axios from 'axios'
import { Button, Header, Table } from 'semantic-ui-react';


function App() {
  const [apartments, setApartments]=useState([]);

  useEffect(()=>{
       axios.get('http://localhost:5000/api/ApartmentsContoller')
       .then(
        response=>{
          setApartments(response.data)
        }
       )
  })
  return(
    <div>
    <Header as='h2' icon='users' content='Apartments'/>
    
     
        <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Adi</Table.HeaderCell>
                <Table.HeaderCell>Soyadi</Table.HeaderCell>
                <Table.HeaderCell>Telefon Nomresi</Table.HeaderCell>
                <Table.HeaderCell>Menzilin NO</Table.HeaderCell>
                <Table.HeaderCell>Mertebe</Table.HeaderCell>
                <Table.HeaderCell>Blok</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            {apartments.map((apartment:any) =>(
            <Table.Body>
              <Table.Row>
                <Table.Cell> {apartment.ownerName}</Table.Cell>
                <Table.Cell> {apartment.ownerSurname}</Table.Cell>
                <Table.Cell>{apartment.ownerPhoneNumber}</Table.Cell>
                <Table.Cell>{apartment.apartmentNumber}</Table.Cell>
                <Table.Cell>{apartment.floor}</Table.Cell>
                <Table.Cell>{apartment.block}</Table.Cell>
                <Table.Cell> <Button content='Info' primary /></Table.Cell>
                <Table.Cell> <Button content='Edit' secondary /></Table.Cell>
              </Table.Row>
            </Table.Body>
         
      ))}
       </Table>
    

    </div>
  )
}

export default App
