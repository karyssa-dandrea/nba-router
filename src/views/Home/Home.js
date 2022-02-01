import React, { useEffect } from 'react';
import { useState } from 'react';
import Details from '../../components/List/Details/Details';
import List from '../../components/List/List';
import { getVillager, getVillagerByID } from '../../services/ach';

export default function Home() {
  const [villagers, setVillagers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [villager, setVillager] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVillager();
      setVillagers(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVillagerByID();
      setVillager(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <h1> Loading...</h1>;
  }

  return (
    <div>
      <List villagers={villagers} />
      <Details villager={villager} />
    </div>
  );
}
