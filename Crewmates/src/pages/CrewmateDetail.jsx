// src/pages/CrewmateDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';

function CrewmateDetails() {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase.from('crewmates').select('*').eq('id', id).single();
      if (error) console.error('Error fetching crewmate:', error);
      else setCrewmate(data);
    };
    
    fetchCrewmate();
  }, [id]);

  if (!crewmate) return <p>Loading...</p>;

  return (
    <div>
      <h2>{crewmate.name}</h2>
      <p>Attribute: {crewmate.attribute}</p>
      <p>Additional details can be added here.</p>
      <button onClick={() => navigate(`/crewmates/${id}/edit`)}>Edit Crewmate</button>
      <br />
      <Link to="/crewmates">Back to Crewmate List</Link>
    </div>
  );
}

export default CrewmateDetails;
