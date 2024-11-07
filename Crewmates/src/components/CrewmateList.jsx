// src/components/CrewmateList.jsx
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import CrewmateCard from './CrewmateCard';

function CrewmateList() {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase.from('crewmates').select('*');
      if (error) console.error(error);
      else setCrewmates(data);
    };
    fetchCrewmates();
  }, []);

  return (
    <div>
      {crewmates.map((crewmate) => (
        <CrewmateCard key={crewmate.id} crewmate={crewmate} />
      ))}
    </div>
  );
}

export default CrewmateList;
