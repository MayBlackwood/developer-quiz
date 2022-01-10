import React from 'react';

import './styles.css';

const Table = ({ data = [] }) => {
  return (
    <div className="tableContainer">
      {data.length ? (
        <>
          <p className="heading">Result:</p>
          <ul>
            {data.map(({ word, score }) => {
              return (
                <li className="tableItem" key={`${word}${score}`}>
                  {word}
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <div>There is no data</div>
      )}
    </div>
  );
};

export default Table;
