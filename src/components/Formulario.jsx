import Form from "react-bootstrap/Form";
import "../css/formulario.css";


const Formulario = ({ categoria }) => {
  const handleChange = (e) => {
    categoria(e.target.value);
  };

  return (
    <div className="container-form">
      <div>
        <p>Buscar por Categoria: </p>
      </div>
      <Form.Select
        aria-label="Default select example"
        className="w-50 m-3"
        onChange={handleChange}
      >
        <option value="sports">Seleccionar categoría...</option>
        <option value="business">Negocios</option>
        <option value="entertainment">Entretenimiento</option>
        <option value="health">Salud</option>
        <option value="science">Ciencia</option>
        <option value="sports">Deportes</option>
        <option value="technology">Tecnología</option>
      </Form.Select>
    </div>
  );
};

export default Formulario;
