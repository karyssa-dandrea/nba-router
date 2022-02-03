import React, { useEffect } from 'react';
import { useState } from 'react';
import Form from '../../components/Form/Form';
import List from '../../components/List/List';
import { getVillager } from '../../services/ach';

export default function Home() {
  const [villagers, setVillagers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVillager();
      setVillagers(data);
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
      <Form selected={selected} setSelected={setSelected} />
    </div>
  );
}
