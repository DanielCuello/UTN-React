import Home from '../Paginas/Home'
import Registro from '../Paginas/Registro'
import Login from '../Paginas/Login'
import {Routes, Route} from "react-router-dom"
import DetallePage from '../Paginas/DetallePage';
import NotFound from '../Paginas/NotFound';



function Public() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/alta' element={<Registro />} />
        <Route path='/ingresar' element={<Login />} />
        <Route path='/producto/:id' element={<DetallePage />}  />
        <Route path='*' element={<NotFound />} />
      </Routes>
  );
}

export default Public;