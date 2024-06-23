import React from 'react';
import { useNavigate } from 'react-router-dom';

function Editar() {
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
          <button className="button-nav" onClick={home_view}>Crear Actividad</button>
        </li>
        <li className="items-nav">
          <button className="button-nav" onClick={consultar_view}>Consultar Actividad</button>
        </li>
        <li className="items-nav">
          <button className="button-nav-active" onClick={editar_view}>Editar actividad</button>
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
      <div className="nav-title">--Actualizar una actividad--</div>
      

        <div className="frm-activity">
          <h1 className="tittle">Editar información de la Actividad</h1>
          <form action="">
                <div className="form-group">
                    <label className="txt-lbl">Id Actividad</label>
                    <input className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="txt-lbl">Nombre___</label>
                    <input className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="txt-lbl">Descripción</label>
                    <textarea className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="txt-lbl">Fecha inicio</label>
                    <input type="date"  className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="txt-lbl">Fecha Final</label>
                    <input type="date"  className="form-input" />
                  </div>
                  <div className="form-group">
                    <label type="time" className="txt-lbl">Hora Inicio</label>
                    <input className="form-input" />
                  </div>
                  <div className="form-group">
                    <label type="time" className="txt-lbl">Hora Fin___</label>
                    <input className="form-input" />
                   </div>
                  <button className="btn-success">Guardar</button>
          </form>
        </div>
      </div>
      
  </div>
  );
}

export { Editar }