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
