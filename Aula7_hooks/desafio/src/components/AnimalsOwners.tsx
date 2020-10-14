import React from 'react';

// interface IProps{

// }

export default function AnimalsOwners(){

  return(
    <section id="report">
        <button>Ordenar donos com mais animais</button>
        <table id="reportList">
          <thead>
            <tr>
              <th>Dono</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fulano 1</td>
              <td>2 animais</td>
            </tr>
            <tr>
              <td>Fulano 2</td>
              <td>1 animal</td>
            </tr>
            <tr>
              <td>Fulano 3</td>
              <td>3 animais</td>
            </tr>
          </tbody>
        </table>
      </section>
  );
}