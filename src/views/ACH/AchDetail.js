import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Details from '../../components/List/Details/Details';
import { useHistory } from 'react-router-dom';
import useVillagerDetails from '../../context/UseVillagers';

export default function AchDetail() {
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const { villager } = useVillagerDetails();

  useEffect(() => {
    if (villager.name) {
      setLoading(false);
    }
  }, [villager]);

  if (loading) {
    return <h1> Loading...</h1>;
  }

  const handleClick = (e) => {
    e.preventDefault();
    history.push('/');
  };

  return (
    <div>
      <Details villager={villager} />
      <button onClick={handleClick}>Previous Page</button>
    </div>
  );
}
