import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import MenuNavBar from "./component/MenuBar"
import Login from  "./component/Login"
import Imag from  "./component/Imag" 

function App() {
  return (
    <div>
   <MenuNavBar />
   <div classname="landing">
     <Login />
     <Imag />
   </div>
    </div>
  );
}

export default App;
