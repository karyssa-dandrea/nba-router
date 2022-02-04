import React, { useEffect } from 'react';
import { useState } from 'react';
import Form from '../../components/Form/Form';
import List from '../../components/List/List';
import { getSpecies, getVillager } from '../../services/ach';

export default function Home() {
  const [villagers, setVillagers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState('All');
  const [filteredVills, setFilteredVills] = useState([]);
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVillager();
      const vils = await getSpecies();
      setSpecies(vils);
      setVillagers(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    let filter = villagers.filter((villy) => villy.species === selected);
    setFilteredVills(filter);
  }, [villagers, selected]);

  if (loading) {
    return <h1> Loading...</h1>;
  }

  return (
    <div>
      <Form selected={selected} setSelected={setSelected} species={species} />
      <List villagers={villagers} filteredVills={filteredVills} selected={selected} />
    </div>
  );
}
