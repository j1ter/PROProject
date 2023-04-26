import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import React, { useContext } from "react";
import { Context } from "../index";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { SHOP_ROUTE } from '../utils/consts';
import {observer} from "mobx-react-lite"

const NavBar = observer(()=> {
    const {user} = useContext(Context)
    return (
        <Navbar style={{backgroundColor: '#27AE60'}}>
        <Container>
          <NavLink style={{color:'white'}} to={SHOP_ROUTE}>Clean Choice</NavLink>
          {user.isAuth ?
          <Nav className="me-auto">
           <Button variant={'outline-light'}>Админ панель</Button>
           <Button variant={'outline-light'} className="ml-4">Войти</Button>
           </Nav>
           :
           <Nav className="me-auto">
           <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
           </Nav>
           }
           <Form className="d-flex">
             <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
             />
             <Button variant="outline-success">Search</Button>
             </Form>
        </Container>
      </Navbar>
    );
});

export default NavBar;