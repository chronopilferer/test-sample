import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProjectCard from "../components/ui/card/ProjectCard";

function Project() {

    const projects = [
        {
            title: "AI Chatbot",
            description: "자연어 처리를 활용한 챗봇 프로젝트입니다.",
            imageUrl: "https://placehold.co/600x400",
            link: "https://github.com/yourname/ai-chatbot"
          },
          {
            title: "Portfolio Website",
            description: "React-Bootstrap 기반 포트폴리오 사이트입니다.",
            imageUrl: "https://placehold.co/600x400",
            link: "https://yourname.github.io/portfolio"
          },
          {
            title: "Data Visualizer",
            description: "차트로 데이터를 시각화한 프로젝트입니다.",
            imageUrl: "https://placehold.co/600x400",
            link: "https://github.com/yourname/data-visualizer"
          },
          {
            title: "E-commerce Site",
            description: "React와 Node.js로 만든 전자상거래 사이트입니다.",
            imageUrl: "https://placehold.co/600x400",
            link: "https://github.com/yourname/commerce-site"
          }
        ]

  return (
    <Container>
        <Row>
            <Col xs={1}>
                여백
            </Col>
            <Col xs={10}>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {projects.map((project, idx) => (
                        <Col key={idx}>
                            <ProjectCard
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            link={project.link}
                            />
                        </Col>
                    ))}
                </Row>
            </Col>
            <Col xs={1}>
                여백
            </Col>
        </Row>
    </Container>
  );
}

export default Project;