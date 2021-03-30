import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/home';
import Usuario from '../../pages/usuario-cadastro';
import Relatorios from '../../pages/usuario-relatorio';
import Edicao from '../../pages/edicao';


function Rotas () {
    return(
        <Switch>
      <Route exact path="/" component={Home}/>
     <Route exact path="/usuario" component={Usuario}/>
     <Route exact path="/relatorios" component={Relatorios}/>
     <Route exact path="/edicao/:id" component={Edicao}/>
    </Switch>

  );
}

export default Rotas;
