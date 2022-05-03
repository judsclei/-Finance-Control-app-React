import React from 'react';

const Header = ({keys, head}) => {
    const tabelHead = head || {}
    return(
        <thead>
            <tr>
                {
                    keys.map(key => <th key={key} > {tabelHead[key] || key} </th>)
                }
                <th>Ações</th>
            </tr>            
        </thead>
    )
}

const Row = ({record}) =>{ 
    const keys = Object.keys(record)
    return  (
        <tr key={record.id}>
            {
                keys.map( (key, i) => <td key={i}>{record[key]}</td>)
            }
            <td>
                <button id="editar" className="warning"><i className="bi">&#9998;</i></button>
                <button id="excluir" className="danger"><i className="bi">&#10005;</i></button>
            </td>
        </tr>
    )
}

const Table = ({data, head}) => {
    const keys = Object.keys(data[0])
     return(
        <div>
            <table id="tableRecebimentos" className="table table-button">
              <Header keys={keys} head={head}/>
              <tbody>
                  { data.map((record, i) => <Row key={i} record={record} />) }           
              </tbody>
              <tfoot>
                <tr>
                  <td>
                      <label className='valorT'>Valor Total: </label>
                      <label id="totalRecebimento"></label>
                 </td>
                </tr>
              </tfoot>
            </table>
          </div>
    );
}

export default Table;