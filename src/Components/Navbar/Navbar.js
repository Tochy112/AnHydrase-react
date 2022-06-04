import React from 'react'
import {Container, Nav} from 'react-bootstrap'
import "./Navbar.css"

const navbar = () => {
  return (
    <div>
        <Container id="wrapper">
            <a className='navbar-brand' href='/'>AnHydrase</a>
            <Nav>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>About</a>
                    </li>
                    <li>
                        <a href='/'>Contact Us</a>
                    </li>
                </ul>
            </Nav>
        </Container>
    </div>
  )
}

export default navbar