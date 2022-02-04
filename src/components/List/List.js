import React from 'react';
import { Link } from 'react-router-dom';

export default function List({ villagers, filteredVills, selected }) {
  return (
    <div>
      <h1>Animal Crossing Cuties:</h1>
      {selected === 'All' &&
        villagers.map((vill) => (
          <>
            <Link key={vill.id} to={`/villagers/${vill.id}`}>
              <p key={vill.id}>{vill.name['name-USen']}</p>
              <img src={vill.icon_uri} />
            </Link>
          </>
        ))}
      {selected !== 'All' &&
        filteredVills.map((vill) => (
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
