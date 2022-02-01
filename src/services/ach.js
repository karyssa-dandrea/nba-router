export async function getVillager() {
  const resp = await fetch('http://acnhapi.com/v1a/villagers');
  const data = await resp.json();
  return data;
}

export async function getVillagerByID(villagerID) {
  const resp = await fetch(`http://acnhapi.com/v1a/villagers/${villagerID}`);
  const data = await resp.json();
  return data;
}
