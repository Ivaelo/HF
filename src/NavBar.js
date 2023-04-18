import React, { useState } from 'react';
import axios from 'axios';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import PopupC from './PopupC';
function NavBar(){
  const [isOpen,setIsOpen] = useState(false)
  
  function handlePopupC(){
      setIsOpen(!isOpen);
  }
    const [showNavText, setShowNavText] = useState(false);
    function handleLogout(event){
      event.preventDefault();

      axios.post(`http://localhost:3000/logout`, {}, { withCredentials: true })
      .then(() => {
          sessionStorage.removeItem("id");
      })
      .catch(error => {
          console.log(error);
      })
    }

  return (
    <div>
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Navbar w/ text</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavText(!showNavText)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavText}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink  href='/view'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/register'>Register</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/Login'>Login</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <Button variant="outline-success" onClick={(e)=>(handleLogout(e))} >Log out</Button>
          <Button onClick={handlePopupC}>Create</Button>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    <PopupC show={isOpen}
             onHide={() => setIsOpen(false)}/>
    </div>
  );
} 

export default NavBar;