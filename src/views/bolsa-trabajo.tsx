import { Row, Col } from "antd";

const BolsaTrabajo = () => {
  return (
    <section>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={24} md={20} lg={16} xl={14}>
          <h1>Bolsa de trabajo</h1>
          <p>Esta es la vista de Bolsa de trabajo.</p>
        </Col>
      </Row>
    </section>
  );
};

export default BolsaTrabajo;

