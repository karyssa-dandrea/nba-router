import { useState, useEffect } from 'react';
import { getVillagerByID } from '../services/ach';
import { useParams } from 'react-router-dom';

export default function useVillagerDetails() {
  const [villager, setVillager] = useState({});
  const { villagerID } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVillagerByID(villagerID);
      setVillager(data);
    };
    fetchData();
  }, [villagerID]);

  return { villager };
}
