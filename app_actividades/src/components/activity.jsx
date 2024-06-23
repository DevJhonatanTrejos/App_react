import React from 'react';
import { useNavigate } from 'react-router-dom';

function Activity() {
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
    const activity_view=() =>{
        navigate('/activity');
      }
  return (
    <div className="Home">
      <div className="nav">
        <li className="items-nav">
          <button className="button-nav" onClick={home_view}>Crear Actividad</button>
        </li>
        <li className="items-nav">
          <button className="button-nav-active" onClick={consultar_view}>Consultar Actividad</button>
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
  </div>
  );
}

export { Activity }