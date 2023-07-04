import MyNavbar from "../components/MyNavbar";
import ProjectCard from "../components/ProjectCard";
import { Container, Row, Col} from "react-bootstrap";


const Projects = () => (
  <Container fluid className="mt-20">
    <MyNavbar />
    <Container>
      <h1>
        My Recent <strong>Works</strong>
      </h1>
      <p>
        Here are a few projects I've worked on recently.
      </p>
      <Row>
        <Col md={4}>
          <ProjectCard
            title="Password Game"
            summary="summary here"
            source="https://github.com/ehayes2000/password-game"
            demo="https://ehayes2000.github.io/password-game/"
            img={<img src="/images/password-game.png"/>}
          />
        </Col>
        <Col md={4}>
          <ProjectCard
            title="Online Chess"
            summary="summary here"
            source="https://github.com/ehayes2000/chessv2"
            demo="http://chessapp-env.eba-ds87phsx.us-west-2.elasticbeanstalk.com/"
            img={<img src="/images/password-game.png"/>}
          />
        </Col>
        <Col md={4}>
          <ProjectCard
            title="Moving Pose"
            summary="summary here"
            source="https://github.com/MehmetMHY/moving-pose"
            img={<img src="/images/moving-pose.png"/>}
          />
        </Col>
      </Row>
    </Container>
  </Container>
);

export default Projects;
