import {  Form, Button,Segment } from 'semantic-ui-react';
import { Apartments } from '../../app/models/apartments';
import { ChangeEvent, useState } from 'react';

interface Props{
    apartment:Apartments | undefined;
    createOrEdit:(apartment:Apartments)=>void;
}

export default function ApartmentFrom({apartment:selectedApartment,createOrEdit}:Props){

    const initialState=selectedApartment??{
        
        id:'',
        ownerName: '',
        ownerSurname: '',
        ownerPhoneNumber: '',
        apartmentNumber: '',
        floor: '',
        block: ''
        
    }

    const[apartment,setApartment]=useState(initialState);

    function handleSubmit(){
          createOrEdit(apartment)
    }
    function handleInputChange(event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const{name,value}=event.target;
        setApartment({...apartment,[name]:value});
     }
    return(
        <Segment clearing>
        <Form onSubmit={handleSubmit} autoComplete='off'>
            <Form.Input placeholder='Adi' value={apartment.ownerName} name='adi' onChange={handleInputChange}/> 
            <Form.Input placeholder='Soyadi'value={apartment.ownerSurname} name='soyadi' onChange={handleInputChange}/>
            <Form.Input placeholder='Telefon Nomresi' value={apartment.ownerPhoneNumber} name='telefonnomresi' onChange={handleInputChange}/>
            <Form.Input  placeholder='Menzilin nomresi' value={apartment.apartmentNumber} name='menzilinnomresi' onChange={handleInputChange}/>
            <Form.Input placeholder='Mertebe' value={apartment.floor} name='mertebe' onChange={handleInputChange}/>
            <Form.Input placeholder='Blok' value={apartment.block} name='blok' onChange={handleInputChange}/> 
            <Button floated='right' positive type='submit' content='Submit'  />
            <Button floated='right' type='button' content='Cancel'/>             
        </Form>
    </Segment>
    )
}

/*
  <Button floated='right' positive type='submit' content='submit'/>
            <Button floated='right' type='button' content='Cancel'/>
*/