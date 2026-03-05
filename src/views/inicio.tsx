import { Row, Col } from "antd";

const Inicio = () => {
  return (
    <section>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={24} md={20} lg={16} xl={14}>
          <h1>Inicio</h1>
          <p>Bienvenido a la vista de Inicio.</p>
        </Col>
      </Row>
    </section>
  );
};

export default Inicio;

