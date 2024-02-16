import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import ListaNoticias from "./components/ListaNoticias";
import Titulo from "./components/Titulo";
import Container from "react-bootstrap/Container";

function App() {
  const [noticias, setNoticias] = useState([]);
  const [cate, setCate] = useState("");

  useEffect(() => {
    consultarApi();
  }, [cate]);

  const traerCategoria = (categoria) => {
    setCate(categoria);
  };

  const consultarApi = async () => {
    let link = `https://newsapi.org/v2/top-headlines?language=en&category=${cate}&apiKey=374d11cb4e4f4886b6850e67e02c8a57`;
    const respuesta = await fetch(link);
    const dato = await respuesta.json();

    setNoticias(dato.articles);
  };

  return (
    <>
      <Titulo />

      <Container>
        <Formulario categoria={traerCategoria} />
        <ListaNoticias arreglo={noticias} />
      </Container>
    </>
  );
}

export default App;
