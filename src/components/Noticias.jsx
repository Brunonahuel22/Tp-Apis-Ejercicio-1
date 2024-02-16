import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../css/noticias.css";

const Noticias = ({ item }) => {
  return (
    <Card
      style={{ width: "18rem" }}
      className="my-3 bg-dark card text-center m-2"
    >
      <Card.Title className="text-secondary"> {item.title} </Card.Title>
      <Card.Img variant="top" src={item.urlToImage} />
      <Card.Body>
        <Card.Text>{item.content}</Card.Text>
        <a href={item.url} className="btn btn-primary">
          Ver nota
        </a>
      </Card.Body>
    </Card>
  );
};

export default Noticias;
