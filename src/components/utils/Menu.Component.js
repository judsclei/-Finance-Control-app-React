import React, {Component} from 'react';
import ListaGastos from'./../pages/ListaGastos.Component';
import Fechamento from '../pages/Fechamento.Component';
import Carteira from '../pages/Carteira.Component'

class Menu extends Component {
    
    render() {
        return(
            <footer className="navBar">
            <div id="menuPrincipal" className="buttonGroup">
              <button id="tab1" className="button tab active" ><i className="bi bi-person-lines-fill"></i> Lista de gastos</button>
              <button id="tab2" className="button tab" ><i className="bi bi-calculator-fill"></i> Fechamento</button>
              <button id="tab3" className="button tab"><i className="bi bi-wallet2"></i> Carteira</button>
            </div>
          </footer>
        );
    }

    routeControl(route)
    {
      switch (route) {
        case 'ListaGastros':
          return <ListaGastos/>
        case 'Fechamento':
          return <Fechamento/>
        case 'Carteira':
          return <Carteira/>
        default:
          return <ListaGastos/>
      }
    }
}

export default Menu;