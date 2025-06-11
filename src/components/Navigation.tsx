import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

interface NavigationProps {
    logo: string;
    name: string;
    links: {
        name: string;
        url: string;
    }[];
}

const Navigation: NavigationProps = ({...props}) => {
    return (
        <Navbar className="p-3" expand="md">
            <Navbar.Brand href="/">
                <img class="logo" src={`${props.id}/logo.svg`} alt={props.name} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav className="ms-auto gap-md-4 pe-md-3 pt-3 pt-md-0 navbar-nav">
                    {props.links.map((link, i) =>
                        <Nav.Link
                            key={i}
                            href={link.url}
                        >
                            {link.name}
                        </Nav.Link>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
