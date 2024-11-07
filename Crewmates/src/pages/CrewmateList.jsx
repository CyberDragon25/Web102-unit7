// src/pages/CrewmateList.jsx
import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

function CrewmateList() {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase.from('crewmates').select('*');
      if (error) console.error('Error fetching crewmates:', error);
      else setCrewmates(data);
    };
    
    fetchCrewmates();
  }, []);

  return (
    <div>
      <h2>Crewmate List</h2>
      {crewmates.length > 0 ? (
        <ul>
          {crewmates.map((crewmate) => (
            <li key={crewmate.id}>
              <h3>{crewmate.name}</h3>
              <p>Attribute: {crewmate.attribute}</p>
              {/* Link to individual crewmate page */}
              <a href={`/crewmates/${crewmate.id}`}>View Details</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No crewmates found.</p>
      )}
    </div>
  );
}

export default CrewmateList;
