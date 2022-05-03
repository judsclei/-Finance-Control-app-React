import React, {Component} from 'react';
import Table from './../utils/Table.Component';

class Carteira extends Component {
    
    state = {
        recursos: [
            { id: 1, nome: 'Conta de Luz', dataRecebimento: '30/05/2022', valor: 159.63},
            { id: 2, nome: 'Conta de agua', dataRecebimento: '30/05/2022', valor: 159.63}
    ]
    }
    image = './imagensTelas/carteiraVazia.png';

    render() {
        return(
            <div>
                <div>
                    <a className="inclui" type="button"><i className="bi">&#43;</i></a>
                    <div className="componentHeader">
                        <h1 className="componentTitle">Entrada de recursos</h1>
                    </div>
                </div>
                <div className="componentContent">
                    {this.verificaRecebimentos()}
                </div>
            </div>
            
        );
    }

    verificaRecebimentos()
    {
        if(this.state.recursos.length> 0)
        {
            return this.tabela();
        }
        else{
            return this.telaVazia();
        }
    }

    tabela() {
        const head = {
            id: 'Codigo',
            nome: 'Nome do recebimento',
            dataRecebimento: 'Data',
            valor: 'Valor'
        };

        return (
            <div>
                <Table data={this.state.recursos} head = {head}/>
            </div>
        );
    }

    telaVazia()
    {
        return (
            <div id="telaLimpaRecebimentos" className="telaLimpaRecebimentos">
                <img src={this.image} alt="carteiraVazia"/>
                <h1>Não ha recebimentos cadastrados.</h1>
            </div>
        );
    }
}

export default Carteira;