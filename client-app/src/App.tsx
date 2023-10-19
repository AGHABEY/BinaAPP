import { useEffect,useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [apartments, setApartments]=useState([]);

  useEffect(()=>{
       axios.get('http://localhost:5000/api/ApartmentsContoller')
       .then(
        response=>{
          setApartments(response.data)
          console.log(response.data)
        }
       )
  })
  return(
    <div>
    <h1>Bina APP</h1>
    <ul>
      {apartments.map((apartment:any) =>(
        <li key={apartment.id}>
          {apartment.ownerName}
       </li>
      ))}
    </ul>
    </div>
  )
}

export default App
