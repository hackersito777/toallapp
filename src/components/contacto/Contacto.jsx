import styles from "./contacto.module.css"


const Contacto = () => {

    const numeroWhatsApp = '573174327691'; // Reemplaza con el número de WhatsApp al que deseas redirigir

    const handleHacerPedidoClick = () => {
      const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}`;
      window.location.href = urlWhatsApp;
    };


    return(
    <>
    
    <button className={styles.neonbutton} onClick={handleHacerPedidoClick}>WhatsApp</button>
    
    </>
    
    
    
    )
    
    
    
    
    
    }
    
    export default Contacto;