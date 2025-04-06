import React from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard( { title, description, imageUrl, link} ) {
  return (
    <Card classNaem='project-card'>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {description}
        </Card.Text>
        <Button variant="dark" href={link}>
            프로젝트 보기
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;