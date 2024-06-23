import React from 'react';
import { useNavigate } from 'react-router-dom';

function Tiempo() {
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
          <button className="button-nav" onClick={editar_view}>Editar Actividad</button>
        </li>
        <li className="items-nav">
          <button className="button-nav">Consultar Descripción</button>
        </li>
        <li className="items-nav">
        <   button className="button-nav-active" onClick={tiempo_view}>Consultar tiempos</button>
        </li>
        <li className="items-nav">
          <button className="button-nav" onClick={login_view}>Cerrar Sesión</button>
        </li>
      </div>
      <div>
      <div className="nav-title">--Consultar actividades en rango de tiempo--</div>
      

        <div className="frm-activity">
          <div className="form-group">
                    <label className="txt-lbl">Fecha Desde:</label>
                    <input className="form-input"  type="date" placeholder='Ingrese el nombre' /><br/>
                    <label className="txt-lbl">Fecha hasta:</label>
                    <input className="form-input"  type="date" placeholder='Ingrese el nombre' /><br/>
                    <button class="btn btn-consult" onClick={editar_view}>Consultar</button>
          </div>
          <h3 className="tittle">Descripción de actividades</h3>
          <table>
        <thead>
            <tr>
                <th>Actividad</th>
                <th>Descripción Actividad</th>
                <th>Fecha de Inicio</th>
                <th>Fecha de Fin</th>
                <th>Hora de Inicio</th>
                <th>Hora de Fin</th>
                <th>Estado</th>
                <th>Acción</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Se realizó el proceso de cración de un cronograma</td>
                <td>2024-05-01</td>
                <td>2024-05-05</td>
                <td>09:00</td>
                <td>17:00</td>
                <td>Finalizado</td>
                <td>
                    <button class="btn btn-actualizar" onClick={editar_view}>Detalles</button>
                    <button class="btn btn-editar" onClick={editar_view}>Editar</button>
                    <button class="btn btn-eliminar">Eliminar</button>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Se definió el product Baclog del proyecto</td>
                <td>2024-05-06</td>
                <td>2024-05-06</td>
                <td>10:00</td>
                <td>12:00</td>
                <td>Completado</td>
                <td>
                    <button class="btn btn-actualizar" onClick={editar_view}>Detalles</button>
                    <button class="btn btn-editar" onClick={editar_view}>Editar</button>
                    <button class="btn btn-eliminar">Eliminar</button>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>Realizar la asignación de actividades al equipo</td>
                <td>2024-05-07</td>
                <td>2024-05-10</td>
                <td>08:00</td>
                <td>16:00</td>
                <td>En Progreso</td>
                <td>
                    <button class="btn btn-actualizar" onClick={editar_view}>Detalles</button>
                    <button class="btn btn-editar" onClick={editar_view}>Editar</button>
                    <button class="btn btn-eliminar">Eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>
        </div>
      </div>
      
  </div>
  );
}

export { Tiempo }