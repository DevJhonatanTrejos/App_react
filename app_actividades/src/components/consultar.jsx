import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity } from './activity';

function Consultar() {
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
          
          
          <Activity/>
        <div className="nav-title">--Consultar actividades --</div>
          
        <div className="frm-activity">
          <h1 className="tittle">Mis actividades</h1>
          <table>
        <thead>
            <tr>
                <th>ID Actividad</th>
                <th>Nombre Actividad</th>
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
                <td>Planificación de Proyecto</td>
                <td>2024-05-01</td>
                <td>2024-05-05</td>
                <td>09:00</td>
                <td>17:00</td>
                <td>Pendiente</td>
                <td>
                    <button class="btn btn-actualizar" onClick={descripcion_view}>Detalles</button>
                    <button class="btn btn-editar" onClick={editar_view}>Editar</button>
                    <button class="btn btn-eliminar">Eliminar</button>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Revisión de Código</td>
                <td>2024-05-06</td>
                <td>2024-05-06</td>
                <td>10:00</td>
                <td>12:00</td>
                <td>Completado</td>
                <td>
                    <button class="btn btn-actualizar" onClick={descripcion_view}>Detalles</button>
                    <button class="btn btn-editar" onClick={editar_view}>Editar</button>
                    <button class="btn btn-eliminar">Eliminar</button>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>Desarrollo de Funcionalidad</td>
                <td>2024-05-07</td>
                <td>2024-05-10</td>
                <td>08:00</td>
                <td>16:00</td>
                <td>En Progreso</td>
                <td>
                    <button class="btn btn-actualizar" onClick={descripcion_view}>Detalles</button>
                    <button class="btn btn-editar" onClick={editar_view}>Editar</button>
                    <button class="btn btn-eliminar">Eliminar</button>
                </td>
            </tr>
            <tr>
                <td>4</td>
                <td>Pruebas Unitarias</td>
                <td>2024-05-11</td>
                <td>2024-05-12</td>
                <td>09:30</td>
                <td>15:30</td>
                <td>Pendiente</td>
                <td>
                    <button class="btn btn-actualizar" onClick={descripcion_view}>Detalles</button>
                    <button class="btn btn-editar" onClick={editar_view}>Editar</button>
                    <button class="btn btn-eliminar">Eliminar</button>
                </td>
            </tr>
            <tr>
                <td>5</td>
                <td>Deploy a Producción</td>
                <td>2024-05-13</td>
                <td>2024-05-13</td>
                <td>13:00</td>
                <td>14:00</td>
                <td>Programado</td>
                <td>
                    <button class="btn btn-actualizar" onClick={descripcion_view}>Detalles</button>
                    <button class="btn btn-editar" onClick={editar_view}>Editar</button>
                    <button class="btn btn-eliminar">Eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>
        </div>   
  </div>
  );
}

export { Consultar }