import { Row, Col } from "antd";
import estrellaImg from "../assets/images/inicio/estrella.png";
import img1 from "../assets/images/quienes/img1.png";
import img2 from "../assets/images/quienes/img2.png";
import img3 from "../assets/images/quienes/img3.png";
import img4 from "../assets/images/quienes/img4.png";
import img5 from "../assets/images/quienes/img5.png";
import logo1 from "../assets/images/quienes/sisivoy.svg";
import playstore from "../assets/images/inicio/googlePlay.png";
import appstore from "../assets/images/inicio/appStore.png";
import cafe from "../assets/images/quienes/cafeiphone.svg";
import mapa from "../assets/images/quienes/mapaiphone.svg";
import negocios from "../assets/images/quienes/negocios.png";
import usuarios from "../assets/images/quienes/usuarios.png";
const QuienesSomos = () => {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        minWidth: "100%",
        padding: "40px 20px",
      }}
    >
      {/* Bloque 1: texto izquierda, carrusel derecha */}
      <Row gutter={[32, 32]} align="middle" style={{ marginBottom: "40px" }}>
        <Col xs={24} md={12}>
          <div>
            <h1
              style={{
                color: "#d4238b",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <img src={estrellaImg} alt="" style={{ width: 24, height: 24 }} />
              ¿Quiénes somos?
              <img src={estrellaImg} alt="" style={{ width: 24, height: 24 }} />
            </h1>
            <p>
              SISI VOY es una app que conecta a usuarios con comercios locales a
              través de recompensas y visibilidad digital. Ayuda a los pequeños
              negocios a atraer clientes y fortalecer su presencia en la
              comunidad, promoviendo un consumo local más inteligente y
              sostenible.
            </p>
            <p>
              Los negocios locales carecen de visibilidad y de presupuesto para
              marketing especializado, lo que limita su crecimiento frente a
              grandes cadenas. Al mismo tiempo, los usuarios desconocen opciones
              cercanas o dudan en probar lugares no “virales”. SISI VOY conecta
              ambos mundos con una solución simple que impulsa la presencia
              digital de los comercios, fomenta el descubrimiento y fortalece la
              economía de la comunidad.
            </p>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div
            style={{
              display: "flex",
              gap: "12px",
              overflowX: "auto",
              paddingBottom: "8px",
            }}
          >
            {[img1, img2, img3, img4, img5].map((src, index) => (
              <div
                key={String(index)}
                style={{
                  minWidth: 180,
                  maxWidth: 220,
                  borderRadius: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <img
                  src={src}
                  alt={`Quiénes somos ${index + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </Col>
      </Row>

      {/* Bloque 2: imagen izquierda, texto derecha */}
      <Row gutter={[32, 32]} align="middle" style={{ marginBottom: "40px" }}>
        <Col xs={24} md={12}>
          <div
            style={{
              height: 460,
              borderRadius: 16,
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gridTemplateRows: "repeat(3, 1fr)",
              gap: "8px",
            }}
          >
            {/* Columna 1: 3 filas */}
            <div
              style={{
                display: "flex",
                borderRadius: 16,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={logo1}
                alt="SISI VOY"
                style={{ width: "90%", height: "90%", objectFit: "contain" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                borderRadius: 16,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={appstore}
                alt="Google Play"
                style={{ width: "90%", height: "90%", objectFit: "contain" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                borderRadius: 16,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={playstore}
                alt="Google Play"
                style={{ width: "90%", height: "90%", objectFit: "contain" }}
              />
            </div>
            {/* Columna 2: 1 bloque alto (ocupa 3 filas) */}
            <div
              style={{
                gridColumn: 2,
                gridRow: "1 / 4",
                borderRadius: 16,
              }}
            >
              <img
                src={mapa}
                alt="mapa"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            {/* Columna 3: 1 bloque alto (ocupa 3 filas) */}
            <div
              style={{
                gridColumn: 3,
                gridRow: "1 / 4",
                borderRadius: 16,
              }}
            >
              <img
                src={cafe}
                alt="cafe"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div>
            <h1
              style={{
                color: "#d4238b",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <img src={estrellaImg} alt="" style={{ width: 20, height: 20 }} />
              ¿Qué lo hace único? - Propuesta de Valor
              <img src={estrellaImg} alt="" style={{ width: 20, height: 20 }} />
            </h1>
            <p>
              SISI VOY integra en una sola app un mapa interactivo para
              descubrir negocios cercanos, tarjetas digitales de lealtad que
              premian la recurrencia y descuentos / promociones (incluido2x1)
              que activan tráfico inmediato. Ofrece onboarding asistido para
              locatarios y visibilidad orgánica (sin depender de publicidad
              pagada), priorizando al 98% del mercado que son PYMEs.
            </p>
            <p>
              SISI VOY no solo busca recompensar el consumo, sino reconstruir la
              conexión entre las personas y los negocios de su comunidad,
              fortaleciendo la economía local a través de tecnología simple y
              cercana.
            </p>
          </div>
        </Col>
      </Row>

      {/* Bloque 3: solo imagen */}
      <Row gutter={[32, 32]} style={{ marginBottom: "40px" }} justify="center">
        <Col xs={24} md={18}>
          <div
            style={{
              height: 560,
              borderRadius: 16,
            }}
          >
            <img
              src={negocios}
              alt="negocios"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        </Col>
      </Row>

      {/* Bloque 4: solo imagen */}
      <Row gutter={[32, 32]} justify="center">
        <Col xs={24} md={18}>
          <div
            style={{
              height: 560,
              borderRadius: 16,
            }}
          >
            <img
              src={usuarios}
              alt="usuarios"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default QuienesSomos;
