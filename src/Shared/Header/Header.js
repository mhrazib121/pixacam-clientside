import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    const {logOut}=useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='header-de w-100'>
                <Container>
                    {/* <Navbar.Brand href="#home">{logo}</Navbar.Brand> */}
                    <img className='logo-design' src={logo} alt="" />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ">
                            <Link className='mx-3 link-design' to="/home">Home</Link>
                            <Link className='mx-3 link-design' to="/products">Products</Link>


                            <Link className='mx-3 link-design' to="/services">Blog</Link>
                            <Link className='mx-3 link-design' to="/about">About Us</Link>
                        </Nav>
                        <Nav>
                            <HashLink smooth to="/dashboard#"> Dashboard</HashLink>
                            <div className="btn-group">
                                <button type="button" className="btn btn-danger rounded-pill dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    {/* {user.displayName} */}
                                </button>
                                <ul className="dropdown-menu">
                                    <Link className="dropdown-item" to="/mybooking">My Booking</Link>
                                    <Link className="dropdown-item" to="/managebooking">Manage Booking</Link>
                                    <Link className='dropdown-item ' to="/addnewservice">Add Service</Link>


                                </ul>
                            </div>
                            <button  className='btn-all mx-2' onClick={logOut} > Logout </button>

                            <button className='btn-all' > <Link className='link-de' to='/login'> Login </Link> </button>


                            {/* {
                                user.email ?
                                    <>
                                       



                                    </>
                                    :

                                    
                            } */}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;