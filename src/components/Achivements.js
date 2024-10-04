import { Container, Row, Col } from "react-bootstrap";

export const Achievements = () => {
  const achievements = [
    {
      title: "LJ Innovation Village-2024",
      description: "Showcased the project Chat Application in LJ Innovation 2024 in the LJ Campus."
    },
    {
      title: "Social Winter Of Code (SWOC 2024)",
      description: "Participated in Social Winter of Code 2024, collaborating on impactful open-source projects with a global community."
    },
    {
      title: "HackNUthon-2024",
      description: "Participated in the HackNUthon at Nirma University, showcasing problem-solving abilities, teamwork, and creativity under pressure."
    }
  ];

  return (
    <section className="achievements" id="achievements">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Achievements</h2>
            <ul className="achievement-list">
              {achievements.map((achievement, index) => (
                <li key={index} className="achievement-item">
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
