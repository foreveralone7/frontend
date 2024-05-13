import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Inscribirse</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Tu Nombre' />
          <input type="email" placeholder='Tu Correo' />
          <input type="password" placeholder='Contraseña' />
        </div>
        <button>Continuar</button>
        <p className="loginsignup-login"> ¿Ya tienes una cuenta? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>Al continuar, acepto los términos de uso y la política de privacidad.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup