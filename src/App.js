import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import { Row, Col } from "react-bootstrap"
import Login from  "./component/Login"
import Imag from  "./component/Imag" 

function App() {
  return (
    <div>
   <Row classname="landing">
   <Col> <Login /></Col>
   <Col> <Imag /></Col>
  
   </Row>
    </div>
  );
}

export default App;
