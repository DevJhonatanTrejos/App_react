import React from 'react';
import { useNavigate } from 'react-router-dom';
//import './Login.css'; // Asegúrate de importar tu archivo CSS

function Login () {
    const navigate = useNavigate();

    const home_view = () => {
        navigate('/home');
    }
    
    return (
        <div>
            <div className="container">
                <div className="img-container">
                    <img className="img-index" src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" alt="background" />
                    <div className="overlay-text">
                        <h1 className='one-title'>Web Activities</h1>
                        <p className='parrafo'>Web Activities te ayuda a gestionar tus actividades de una forma ágil y sencilla;
                        Aumenta tu rendimiento con las funcionalidades de gestión de trabajo.</p>
                    </div>
                </div>
                <div className="form-login">
                    <div className="frm-login">
                        <h1 className="tittle">¡Ingresa para utilizar las funcionalidades!</h1>
                        <form action="">
                            <div className="form-group">
                                <label className="txt-lbl">Usuario:</label>
                                <input className="form-input" />
                            </div>
                            <div className="form-group">
                                <label className="txt-lbl">Contraseña:</label>
                                <input className="form-input" />
                            </div>
                            <button className="btn-success" onClick={home_view}>Iniciar sesión</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Login };