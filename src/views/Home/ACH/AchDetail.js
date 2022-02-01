import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../../../components/List/Details/Details';
import { getVillagerByID } from '../../../services/ach';

export default function AchDetail() {
  const [villager, setVillager] = useState([]);
  const { villagerID } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVillagerByID(villagerID);
      setVillager(data);
      setLoading(false);
    };
    fetchData();
  }, [villagerID, loading]);

  if (loading) {
    return <h1> Loading...</h1>;
  }

  return (
    <div>
      <Details villager={villager} />
    </div>
  );
}
