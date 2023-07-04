import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.img}
      {/* <Card.Img variant="top" src="/images/me.png" alt="card-img" /> */}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.summary}
        </Card.Text>
        <Button variant="primary" href={props.source} target="_blank">
          <BsGithub /> &nbsp;
        </Button>
        {"\n"}
        {"\n"}

        { props.demo? (
          <Button
            variant="primary"
            href={props.demo}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        ) : ""}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;