export async function getVillager() {
  const resp = await fetch('https://acnhapi.com/v1a/');
  const data = await resp.json();
  return data;
}

export async function getVillagerByID(id) {
  const resp = await fetch(`http://acnhapi.com/v1a/villagers/${villagerID}`);
  const data = await resp.json();
  return data;
}
