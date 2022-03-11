import React from 'react';
import style from "./TerminosCondiciones.module.css"

const TerminosCondiciones = () => {
  return (
    <div className={style.container}>
      <a href='/Home' className={style.linkAtras}> <div className={style.backContainer}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13.75" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg> Atrás</div></a>
       <div class="card text-center">
          <div class="card-header">
            <strong>Terminos y Condiciones</strong>
          </div>
          <div class="card-body">
            <h5 class="card-title">Terminos, condiciones y politica de Privacidad</h5>
            <p class="card-text">Los Términos y Condiciones así como la Política de Privacidad y/o informaciones sobre el Sitio se considerarán de aplicación para todo Usuario del Sitio desde el primer momento en que acceda al mismo. Los presentes términos y condiciones tienen carácter obligatorio y vinculante. Se aplican a todas las compras y actividades realizadas en el Sitio. Si el Usuario no acepta en forma total los presentes Términos y Condiciones y la Política de Privacidad, le rogamos que no avance en el acceso y visita de nuestro Sitio. En caso de avanzar en la visita a nuestro Sitio, se entenderá que el Usuario aceptó sin reservas los presentes Términos y Condiciones y la Política de Privacidad, aceptando recibir mails periódicos con la información que el Sitio determine. Los Términos y Condiciones y la Política de Privacidad podrán ser modificados en todo o en parte en cualquier momento y a exclusivo criterio de PERSONAL HEALTH ® .; dichos cambios e implementaciones tendrán vigencia a partir del momento mismo en que sean publicados o insertados en el Sitio o desde que sean notificados al Usuario por cualquier medio, lo que ocurra primero. Por lo expuesto, le sugerimos que los visite periódicamente. Las violaciones a los Términos y Condiciones generarán el derecho en favor del titular del Sitio a suspender o terminar la prestación del servicio al Usuario que las haya realizado, por acción u omisión. El Sitio se preocupa por la protección de datos de carácter personal de los Usuarios, de acuerdo a los lineamientos expuestos en nuestra Política de Privacidad. 
</p>
          </div>
          <div class="card-footer text-muted">
            ® Personal Health 
          </div>
      </div>
    </div>
  )
}

export default TerminosCondiciones;