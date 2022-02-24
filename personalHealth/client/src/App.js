import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Register/User/Login';
import SignUp from './components/Register/User/SignUp';
import UpdateProfile from './components/Register/User/UpdateProfile';
import ForgotPassword from './components/Register/User/ForgotPassword';
import MyQr from './components/myQr/myQr';
import CardDetail from './components/CardDetail/CardDetail.js';
import TerminosCondiciones from './components/Terminos Condiciones/TerminosCondiciones';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/SignUp" element={<UpdateProfile />}/>
        <Route path="/ForgotPassword" element={<ForgotPassword />}/>
        <Route path="/TerminosCondiciones" element={<TerminosCondiciones />}/>
        <Route path="/Detail" element={<CardDetail />}/>
        <Route path="/MyQr" element={<MyQr />}/>
      </Routes>
    </div>
  );
}

export default App;