import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate =useNavigate();

    const login_view=() =>{
        navigate('/login');
    }
    const home_view=() =>{
      navigate('/home');
    }
    const consultar_view=() =>{
      navigate('/consultar');
    }
    const editar_view=() =>{
      navigate('/editar');
    }
    const descripcion_view=() =>{
      navigate('/descripcion');
    }
    const tiempo_view=() =>{
      navigate('/tiempo');
    }
  return (
    <div className="Home">
      <div className="nav">
        <li className="items-nav">
          <button className="button-nav-active" onClick={home_view}>Crear Actividad</button>
        </li>
        <li className="items-nav">
          <button className="button-nav" onClick={consultar_view}>Consultar Actividad</button>
        </li>
        <li className="items-nav">
          <button className="button-nav" onClick={editar_view}>Editar Actividad</button>
        </li>
        <li className="items-nav">
        <button className="button-nav" onClick={descripcion_view}>Consultar Descripción</button>
        </li>
        <li className="items-nav">
          <button className="button-nav" onClick={tiempo_view}>Consultar tiempos</button>
        </li>
        <li className="items-nav">
          <button className="button-nav" onClick={login_view}>Cerrar Sesión</button>
        </li>
      </div>
      <div>
      <div className="nav-title">--Crea una nueva actividad para Ejecutar--</div>
      

        <div className="frm-activity">
          <h1 className="tittle">Crear Actividad</h1>
          <form action="">
                  <div className="form-group">
                    <label className="txt-lbl">Nombre Actividad</label><br/>
                    <input className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="txt-lbl">Descripción</label><br/>
                    <textarea className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="txt-lbl">Fecha</label><br/>
                    <input type="date"  className="form-input" />
                  </div>
                  <div className="form-group">
                    <label type="time" className="txt-lbl">Hora</label><br/>
                    <input className="form-input" />
                  </div>
                  <button className="btn-success">Guardar</button>
          </form>
        </div>
      </div>
      
  </div>
  );
}

export { Home }