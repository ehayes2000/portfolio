import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";

import {
  SiPostgresql,
} from "react-icons/si";

import {
    FaAws
} from "react-icons/fa";


const Skills = () => (
    <Container>
    <h1 className="text-center">
        Professional Skillset
    </h1>
    <Row className="justify-center mb-4 flex-wrap">
            <Col xs={4} md={2} className="tech-icons">
            <DiPython size={60}/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <CgCPlusPlus size={60}/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 size={60} />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiReact size={60} />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiJava size={60}/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPostgresql  size={60}/>
        </Col>      
        <Col xs={4} md={2} className="tech-icons">
            <FaAws size={60}/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiGit  size={60}/>
        </Col>
        
    </Row>
</Container>
)

export default Skills;

