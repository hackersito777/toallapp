import { Outlet, Link } from "react-router-dom";
import styles from "./layout.module.css";

const Layout = () => {

  const numeroWhatsApp = '573174327691'; // Reemplaza con el número de WhatsApp al que deseas redirigir

  const handleHacerPedidoClick = () => {
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}`;
    window.location.href = urlWhatsApp;
  };




  return (
    <>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link to="/inicio">Inicio</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          <li>
            <Link to="/acercadenosotros">Acerca De Nosotros</Link>
          </li>
          <li>
            <Link to={handleHacerPedidoClick}>Pedido</Link>
          </li>

          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;