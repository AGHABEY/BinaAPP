import { useEffect,useState } from 'react'
import axios from 'axios'
import {  Container } from 'semantic-ui-react';
import { Apartments } from '../models/apartments';
import NavBar from './NavBar';
import AparmentDashboard from '../../features/dashboard/ApartmentDashboard';


function App() {
  const [apartments, setApartments]=useState<Apartments[]>([]);
  const [selectedApartment,setSelectedApartment]=useState<Apartments | undefined>(undefined);
  const[editMode,setEditMode]=useState(false);
  const[loading,setLoading]=useState(true);


  useEffect(()=>{
       axios.get<Apartments[]>('http://localhost:5000/api/ApartmentsContoller')
       .then(
        response=>{
          setApartments(response.data)
        }
       )
  },[])

  function handleSelectedApartment(id:string)
  {
    setSelectedApartment(apartments.find(x=>x.id === id));
  }

  function handleCancelSelectedApartment(){
    setSelectedApartment(undefined);
  }

  function handleFormOpen(id?: string){
    id?handleSelectedApartment(id) : handleCancelSelectedApartment();
    setEditMode(true);
   }
  

   function handleFormClose()
   {
     setEditMode(false);
   }
 

  return(
    <>
    <NavBar/>

      <Container style={{marginTop:'7em'}}>
      <AparmentDashboard 
          apartments={apartments}
          selectedApartment={selectedApartment}
          selectApartment={handleSelectedApartment}
          cancelSelectApartment={handleCancelSelectedApartment} editMode={false} openForm={function (id: string): void {
            throw new Error('Function not implemented.');
          } } closeForm={function (): void {
            throw new Error('Function not implemented.');
          } } createOrEdit={function (apartment: Apartments): void {
            throw new Error('Function not implemented.');
          } }      />
       </Container>

    </>
  )
}

export default App
