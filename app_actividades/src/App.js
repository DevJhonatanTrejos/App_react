//import logo from './logo.svg';
import './App.css';
import { Login } from './components/login';
import {Home} from './components/home';
import {Consultar, Register} from './components/consultar';
import { Activity } from './components/activity';
import { Editar } from './components/editar';
import { Descripcion } from './components/descripcion';
import { Tiempo } from './components/tiempo';
import {BrowserRouter, Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/home/activity" element={<Activity/>}></Route>
          <Route path="/consultar" element={<Consultar/>}></Route>
          <Route path="/editar" element={<Editar/>}></Route>
          <Route path="/descripcion" element={<Descripcion/>}></Route>
          <Route path="/tiempo" element={<Tiempo/>}></Route>
          <Route path="/activity" element={<Activity/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
