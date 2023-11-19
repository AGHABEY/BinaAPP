import { Button, Grid, Table } from "semantic-ui-react";
import { Apartments } from "../../app/models/apartments";
import ApartmentDetails from "../popup/ApartmentDetails";


interface Props{
    apartments:Apartments[];
    selectedApartment:Apartments | undefined;
    selectApartment:(id:string) => void;
    cancelSelectApartment:()=>void;
    editMode:boolean;
    openForm:(id:string)=>void;
    closeForm:()=>void;
    createOrEdit:(apartment:Apartments)=>void;
}

export default function AparmentDashboard({apartments,selectedApartment,
  selectApartment,cancelSelectApartment}:Props)
{
   return(
    <Grid>
       
        <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Adi</Table.HeaderCell>
                <Table.HeaderCell>Soyadi</Table.HeaderCell>
                <Table.HeaderCell>Telefon Nomresi</Table.HeaderCell>
                <Table.HeaderCell>Menzilin NO</Table.HeaderCell>
                <Table.HeaderCell>Mertebe</Table.HeaderCell>
                <Table.HeaderCell>Blok</Table.HeaderCell>
                <Table.HeaderCell>Melumat</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            {apartments.map(apartment =>(
            <Table.Body>
              <Table.Row>
                <Table.Cell> {apartment.ownerName}</Table.Cell>
                <Table.Cell> {apartment.ownerSurname}</Table.Cell>
                <Table.Cell>{apartment.ownerPhoneNumber}</Table.Cell>
                <Table.Cell>{apartment.apartmentNumber}</Table.Cell>
                <Table.Cell>{apartment.floor}</Table.Cell>
                <Table.Cell>{apartment.block}</Table.Cell>
                <Table.Cell> <Button content='Info' onClick={() => selectApartment(apartment.id)}/></Table.Cell>
              </Table.Row>
            </Table.Body>
         
      ))}

       {selectedApartment && 
    <ApartmentDetails apartment={selectedApartment} cancelSelectApartment={cancelSelectApartment} selectedApartment={undefined} selectApartment={function (id: string): void {
           throw new Error("Function not implemented.");
         } } createOrEdit={function (apartment: Apartments): void {
           throw new Error("Function not implemented.");
         } } editMode={false}/>
    }
       </Table>
    
   
    
    </Grid>
   )
}