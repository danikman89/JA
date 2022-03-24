import './App.css';
import React, { useState } from 'react';
import { tableData } from './data';

function App() {
  const [onlyInstalment, setOnlyInstalment] = useState(false);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [sort, setSort] = useState();
  const [asc, setAsc] = useState(false);

  function handleSort(columName) {
    asc ? setAsc(false) : setAsc(true);
    setSort(columName);
  }

  function handleOnlyInstalmentChange(e) {
    setOnlyInstalment(e.target.checked);
  }

  function handleOnlyInStock(e) {
    setOnlyInStock(e.target.checked);
  }

  const data = tableData
    .filter(item => {
      if (onlyInstalment) {
        return item.instalment;
      }
      if (onlyInStock) {
        return item.count > 0;
      }
      return true;
    })
    .sort((a, b) => {
      if (sort) {
        if (asc) {
          if (typeof a[sort] === 'string') {
            return a[sort].replace(/\D/g, '') - b[sort].replace(/\D/g, '');
          }
          return a[sort] - b[sort];
        } else {
          if (typeof a[sort] === 'string') {
            return b[sort].replace(/\D/g, '') - a[sort].replace(/\D/g, '');
          }
          return b[sort] - a[sort];
        }
      }
    });

  return (
    <div className="container">
      <div className="inputs">
        <label htmlFor="onlyInstalment">
          <input
            type="checkbox"
            id="onlyInstalment"
            onChange={handleOnlyInstalmentChange}
          ></input>
          Только в рассрочку
        </label>
        <label htmlFor="onlyInStock">
          <input
            type="checkbox"
            id="onlyInStock"
            onChange={handleOnlyInStock}
          ></input>
          Есть в наличии
        </label>
      </div>
      <table className="table">
        <thead>
          <tr className="head">
            <th>№</th>
            <th>Название</th>
            <th className="price" onClick={() => handleSort('price')}>
              Цена
            </th>
            <th className="count" onClick={() => handleSort('count')}>
              Количество
            </th>
            <th>В рассрочку</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={item.count < 5 ? 'active' : 'color'}>
              <td>{index + 1}</td>
              <td className="name">{item.name}</td>
              <td className="price">{item.price}</td>
              <td>{item.count}</td>
              <td>{item.instalment ? '✅' : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
