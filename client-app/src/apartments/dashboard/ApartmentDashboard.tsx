import { Button, Grid, Table } from "semantic-ui-react";
import { Apartments } from "../../app/models/apartments";


interface Props{
    apartments:Apartments[];
}

export default function AparmentDashboard({apartments}:Props)
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
                <Table.Cell> <Button content='Info' primary /></Table.Cell>
                <Table.Cell> <Button content='Edit' secondary /></Table.Cell>
              </Table.Row>
            </Table.Body>
         
      ))}
       </Table>
        
    </Grid>
   )
}