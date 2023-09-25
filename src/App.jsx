import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom"
import Menu from './Componentes/Menu';
import Public from './Ruta/Public';
import Container from "react-bootstrap/Container"
import AuthProvider from "./Context/AuthProvider";


function App() {
  return (
    <Router>
      <AuthProvider>
        <Menu />
        <Container>
        <Public />
        </Container>
      </AuthProvider>
      </Router>
  );
}

export default App;
