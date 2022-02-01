import React from 'react';
import { Link } from 'react-router-dom';

export default function Details({ villager }) {
  return (
    <div>
      {villager.id.map((item) => (
        <>
          <Link key={item.id} to={`/villagers/${item.id}`}>
            <h2>{item.name}</h2>
            <p>Personality: {item.personality}</p>
            <p>Birthday: {item.birthday}</p>
          </Link>
        </>
      ))}
    </div>
  );
}

// map and render the villagers
