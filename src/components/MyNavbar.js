import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
    AiOutlineHome, 
    AiOutlineFundProjectionScreen,
    AiOutlineUser
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

const MyNavbar = () => {
    const [expanded, setExpanded] = useState(false);
    const [sticky, setSticky] = useState(false);

    const handleScroll = () => {
        setSticky(window.scrollY > 0);
    }
    
    useEffect(() => {   
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])
    return (
        <Navbar 
            expanded={expanded}
            onToggle={() => setExpanded(!expanded)}
            fixed="top"
            expand="md"
            className={`bg-slate-500 ${sticky ? "fixed top-0 w-full" : ""}`}
        >
            <Container className="flex justify-between">

            <Navbar.Brand className="font-bold text-2xl lg:ml-60 md:ml-4" as={Link} to="/">
                    EH
                </Navbar.Brand>
                <Navbar.Toggle 
                    aria-controls="responsive-navbar-nav" 
                    onClick={() => setExpanded(!expanded)} 
                />
                <Navbar.Collapse className="flex">
                    <Nav className="flex" defaultActiveKey="#home">
                        <Nav.Item className="mx-4">
                            <Nav.Link as={Link} to="/">   
                            <AiOutlineHome/>Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="mx-4">
                            <Nav.Link   
                                as={Link}
                                to="/about"
                            >
                                <AiOutlineUser/>About
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="mx-4">
                            <Nav.Link as={Link} to="/projects">
                                <AiOutlineFundProjectionScreen/>Projects
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="mx-4 lg:mr-60 md:mr-4">
                            <Nav.Link as={Link} to="/resume">
                                <CgFileDocument/>Resume
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar;