import React from 'react';

export default function List({ villagers }) {
  return (
    <div>
      <h1>Animal Crossing Cuties:</h1>
      {villagers.map((vill) => (
        <>
          <p key={vill.id}>{vill.name['name-USen']}</p>
          <img src={vill.icon_uri} />
        </>
      ))}
    </div>
  );
}

// rendering info for each villager
