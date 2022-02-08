export async function getVillager() {
  const resp = await fetch('https://acnhapi.com/v1a/villagers');
  const data = await resp.json();
  return data;
}

export async function getVillagerByID(villagerID) {
  const resp = await fetch(`https://acnhapi.com/v1a/villagers/${villagerID}`);
  const data = await resp.json();
  return data;
}

export async function getSpecies() {
  const resp = await fetch('https://acnhapi.com/v1a/villagers');
  const data = await resp.json();
  const species = [];
  data.map((villy) => {
    if (!species.includes(villy.species)) {
      species.push(villy.species);
    }
  });

  return ['All', ...species];
}
