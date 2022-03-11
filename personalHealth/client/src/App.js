import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import Login from './components/Register/User/Login';
import InicioSesion from './components/Register/InicioSesion/InicioSesion.js';
import SignUp from './components/Register/User/SignUp';
import UpdateProfile from './components/Register/User/UpdateProfile';
import ForgotPassword from './components/Register/User/ForgotPassword';
import MyQr from './components/myQr/myQr';
import TerminosCondiciones from './components/Terminos Condiciones/TerminosCondiciones';
import Maps from './components/Maps/Maps';
import Calendar from './components/Calendar/Calendar';
import MiHistoria from './components/MiHistoria/MiHistoria.js';
<<<<<<< HEAD
import Instituciones from './components/Instituciones/Instituciones';

=======
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> d4d8cc1235874b7f45aebeb9d525b70d2994fb00
function App() {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home />}/>
        <Route path="/" element={<InicioSesion />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/UpdateProfile" element={<UpdateProfile />}/>
        <Route path="/ForgotPassword" element={<ForgotPassword />}/>
        <Route path="/Maps" element={<Maps />}/>
        <Route path="/Calendar" element={<Calendar />}/>
        <Route path="/TerminosCondiciones" element={<TerminosCondiciones />}/>
        <Route path="/MyQr" element={<MyQr />}/>
        <Route path="/MiHistoria" element={<MiHistoria />}/>
        <Route path="/Entidades" element={<Instituciones/>}/>
      </Routes>
    </div>
  );
}

export default App;