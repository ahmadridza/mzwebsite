
import React, { useState } from 'react';
import './Navbar.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import { NavLink as Link } from 'react-router-dom'

const Searchbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <div className='NavStyle'>
                <Navbar light expand="md" className='NavStyle' >
                    {/* <NavbarBrand href="/" style={{ color: "#FFA500" }}>Medina Zara</NavbarBrand> */}
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>


                            <NavItem >
                                <NavLink style={{ color: "#FFA500" }} activeClassName="active" tag={Link} to="/">
                                    Home | </NavLink>
                            </NavItem>


                            <NavItem>
                                <NavLink style={{ color: "#FFA500" }} activeClassName="active" tag={Link} to="/about">About | </NavLink>
                            </NavItem>
                            <NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret style={{ color: "#FFA500" }}>
                                        Our Programs
              </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            Kindergarten
                </DropdownItem>
                                        <DropdownItem>
                                            Childcare
                </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Reset
                </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{ color: "#FFA500" }}>|   Parents | </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{ color: "#FFA500" }}>Career | </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{ color: "#FFA500" }}>Contact Us | </NavLink>
                            </NavItem>

                        </Nav>


                    </Collapse>


                </Navbar>
            </div>
        </div >
    );
}

export default Searchbar;

