import { Routes, Route  } from 'react-router-dom';
import './App.css';
import Layout from './components/barra/Layout';
import Inicio from './components/inicio/Inicio';
import Productos from './components/productos/Productos';
import AcercaDeNosotros from './components/acercade/AcercaDeNosotros';
import Contacto from './components/contacto/Contacto';


function App() {




  
  return (



    
    <div className="App">







    
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/" element={<Inicio />} />
          <Route path="inicio" element={<Inicio />} />
          <Route path="productos" element={<Productos />} />
          <Route path="acercadenosotros" element={<AcercaDeNosotros />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
