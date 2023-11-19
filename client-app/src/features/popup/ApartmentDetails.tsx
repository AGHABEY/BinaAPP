import React, { useState } from 'react';
import { Button, Header, List, Modal } from 'semantic-ui-react';
import { Apartments } from '../../app/models/apartments';
import ApartmentFrom from '../form/ApartmentForm';

interface Props{
  apartment: Apartments;
  selectedApartment:Apartments | undefined;
  selectApartment:(id:string)=>void;
  cancelSelectApartment:()=>void; 
  createOrEdit:(apartment:Apartments)=>void;
  editMode:boolean;

}



export default function ApartmentDetails({selectedApartment,cancelSelectApartment,editMode,createOrEdit}:Props)
{
  return (
    <div>
        <Modal
              open={true}
              onClose={() => false}
            >
        <Modal.Header>List of Items</Modal.Header>
        <Modal.Content>
        { editMode &&
         <ApartmentFrom  apartment={selectedApartment} createOrEdit={createOrEdit} />
        }
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' onClick={cancelSelectApartment}>Cancel</Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
/*
  <List divided relaxed>
              <List.Item key={apartment.id}>
                <List.Content>
                  <List.Header>ID: {apartment.apartmentNumber}</List.Header>
                  <List.Description>
                    <strong>Name:</strong> {apartment.ownerName}, <strong>Description:</strong> {apartment.ownerSurname}
                  </List.Description>
                </List.Content>
              </List.Item>
            
          </List>
          */
