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
  className={`transition ease-in duration-150 ${sticky ? "fixed top-0 w-full bg-neutral-50 bg-opacity-20 backdrop-blur-sm" : "bg-transparent"} `}
>
  <Container className="flex justify-between text-black ">
    <Navbar.Brand className="font-bold text-2xl" as={Link} to="/">
      EH
    </Navbar.Brand>
    <Navbar.Toggle 
      aria-controls="responsive-navbar-nav" 
      onClick={() => setExpanded(!expanded)} 
    />
    <Navbar.Collapse className="flex">
      <Nav className="flex ms-auto" defaultActiveKey="#home">
        <Nav.Item className="mx-4 transition transform hover:scale-105 hover:-translate-y-1">
          <Nav.Link as={Link} to="/">   
            <div className="flex items-center">
              <AiOutlineHome className="mr-2"/>
              Home
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mx-4 transition transform hover:scale-105 hover:-translate-y-1">
          <Nav.Link as={Link} to="/about">
            <div className="flex items-center">
              <AiOutlineUser className="mr-2"/>
              About
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mx-4 transition transform hover:scale-105 hover:-translate-y-1">
          <Nav.Link as={Link} to="/projects">
            <div className="flex items-center">
              <AiOutlineFundProjectionScreen className="mr-2"/>
              Projects
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mx-4 transition transform hover:scale-105 hover:-translate-y-1">
          <Nav.Link as={Link} to="/resume">
            <div className="flex items-center">
              <CgFileDocument className="mr-2"/>
              Resume
            </div>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>)
}   

export default MyNavbar;