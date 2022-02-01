import React from 'react';

export default function Details({ villager }) {
  return (
    <div>
      <>
        <h2>{villager.name['name-USen']}</h2>
        <img src={villager.icon_uri} />
        <p>Personality: {villager.personality}</p>
        <p>Birthday: {villager.birthday}</p>
      </>
    </div>
  );
}

// map and render the villagers
