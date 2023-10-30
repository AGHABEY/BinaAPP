import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function NavBar()
{
    return(
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                   <img src='/assets/logo.png' alt='logo'/>
                </Menu.Item>
                <Menu.Item name='Apartment'/>
                <Menu.Item>
                   <Button positive content='Qaraj'/>
                </Menu.Item>
                <Menu.Item>
                   <Button positive content='Menzil elave et'/>
                </Menu.Item>
            </Container>   
        </Menu>
    )
}