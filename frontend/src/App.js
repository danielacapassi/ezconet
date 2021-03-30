
import Rotas from './componentes/rotas/index.js';

import {BrowserRouter} from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Rotas/>
      </div>
    </BrowserRouter>

  );
}

export default App;
