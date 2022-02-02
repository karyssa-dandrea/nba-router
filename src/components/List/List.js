import React from 'react';
import { Link } from 'react-router-dom';

export default function List({ villagers }) {
  return (
    <div>
      <h1>Animal Crossing Cuties:</h1>
      {villagers.map((vill) => (
        <>
          <Link key={vill.id} to={`/villagers/${vill.id}`}>
            <p key={vill.id}>{vill.name['name-USen']}</p>
            <img src={vill.icon_uri} />
          </Link>
        </>
      ))}
    </div>
  );
}
