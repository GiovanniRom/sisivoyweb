import { useState } from "react";
import { Layout, Grid, Button, Drawer } from "antd";
import Inicio from "./views/inicio";
import QuienesSomos from "./views/quienes-somos";
import BolsaTrabajo from "./views/bolsa-trabajo";
import Contacto from "./views/contacto";
import AvisoPrivacidad from "./views/aviso-privacidad";

const { Header, Content, Footer } = Layout;
const { useBreakpoint } = Grid;

type Vista =
  | "inicio"
  | "quienes-somos"
  | "bolsa-trabajo"
  | "contacto"
  | "aviso-privacidad";

const navItems: { key: Vista; label: string }[] = [
  { key: "inicio", label: "Inicio" },
  { key: "quienes-somos", label: "¿Quiénes somos?" },
  { key: "bolsa-trabajo", label: "Bolsa de trabajo" },
  { key: "contacto", label: "Contacto" },
];

const MainLayout = () => {
  const [vistaActiva, setVistaActiva] = useState<Vista>("inicio");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const renderVista = () => {
    switch (vistaActiva) {
      case "inicio":
        return <Inicio />;
      case "quienes-somos":
        return <QuienesSomos />;
      case "bolsa-trabajo":
        return <BolsaTrabajo />;
      case "contacto":
        return <Contacto />;
      case "aviso-privacidad":
        return <AvisoPrivacidad />;
      default:
        return null;
    }
  };

  const goTo = (v: Vista) => {
    setVistaActiva(v);
    setDrawerOpen(false);
  };

  const navLinks = (
    <>
      {navItems.map(({ key, label }) => (
        <a
          key={key}
          href={`#${key}`}
          onClick={(e) => {
            e.preventDefault();
            goTo(key);
          }}
          className="nav-link"
        >
          {label}
        </a>
      ))}
    </>
  );

  return (
    <Layout className="app-layout">
      <Header className="main-header">
        <div className="header-inner">
          <div className="logo-area">
            <span className="logo-placeholder">LOGO</span>
          </div>
          {isMobile ? (
            <>
              <Button
                type="text"
                onClick={() => setDrawerOpen(true)}
                className="menu-btn-mobile"
                aria-label="Abrir menú"
              >
                Menú
              </Button>
              <Drawer
                title="Menú"
                placement="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                className="nav-drawer"
                styles={{ body: { padding: "1rem" } }}
              >
                <nav className="main-nav main-nav-vertical">
                  {navItems.map(({ key, label }) => (
                    <a
                      key={key}
                      href={`#${key}`}
                      onClick={(e) => {
                        e.preventDefault();
                        goTo(key);
                      }}
                      className="nav-link"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </Drawer>
            </>
          ) : (
            <nav className="main-nav">{navLinks}</nav>
          )}
        </div>
      </Header>

      <Content className="main-content">{renderVista()}</Content>

      <Footer className="main-footer">
        <a
          href="#aviso-privacidad"
          onClick={(e) => {
            e.preventDefault();
            setVistaActiva("aviso-privacidad");
          }}
          className="footer-link"
        >
          Aviso de privacidad
        </a>
      </Footer>
    </Layout>
  );
};

export default MainLayout;

