import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Noticias from "./Noticias";
import '../css/listaNoticias.css'

const ListaNoticias = ({arreglo}) => {
  return (
    <ListGroup className="d-flex flex-row flex-wrap ">
      {arreglo.map((item,index) => <Noticias item = {item} key = {index} ></Noticias>)}
     
     
    </ListGroup>
  );
};

export default ListaNoticias;
