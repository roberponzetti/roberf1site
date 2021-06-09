import React, {Fragment} from 'react';
import "../styles/styles.scss";
import Home from './Pages/Home'
import Noticias from './Pages/Noticias'
import Calendario from './Pages/Calendario'
import Teams from './Pages/Teams'
import Pilotos from './Pages/Pilotos'
import Resultados from './Pages/Resultados'
import Estadisticas from './Pages/Estadisticas'
import MainMenu from './Organisms/MainMenu'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = () => (
  <Router>
    <MainMenu/>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/noticias" component={Noticias} />
      <Route path="/calendario" component={Calendario} />
      <Route path="/teams" component={Teams} />
      <Route path="/pilotos" component={Pilotos} />
      <Route path="/resultados" component={Resultados} />
      <Route path="/estadisticas" component={Estadisticas} />
      {/* <Route path="/cursos/:id" component={Course} /> */}
      {/* <Route path="/formulario" component={() => <Form name="Pagina de contacto" />} /> */}
      <Route component={() => (
        <div className="">
          <h1>Error 404</h1>
          <span>Pagina no encontrada</span>
        </div>
      )} />
    </Switch>
  </Router>
);

export default App;