import React, {useEffect, useState} from 'react';
import LandingPage from '../../LandingPage/LandingPage';
import { Link } from 'react-router-dom';
import NavModal from '../NavModal/NavModal';

const InicioSesion = () => {
  const [ loading, setLoading]= useState(false)
   
  useEffect(()=> {
    setTimeout(()=> setLoading(true), 2000)
  },[])

  if (!loading) {
    return <LandingPage />;
  } else {
  return (
      <div>
          <NavModal />
      </div>
  )
}
}

export default InicioSesion;