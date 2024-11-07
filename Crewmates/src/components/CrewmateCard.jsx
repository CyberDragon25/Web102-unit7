// src/components/CrewmateCard.jsx
import { supabase } from '../utils/supabaseClient';
import { Link } from 'react-router-dom';

function CrewmateCard({ crewmate }) {
  const handleDelete = async () => {
    const { error } = await supabase
      .from('crewmates')
      .delete()
      .eq('id', crewmate.id);
    if (error) console.error(error);
  };

  return (
    <div>
      <h3>{crewmate.name}</h3>
      <p>Attribute: {crewmate.attribute1}</p>
      <Link to={`/crewmate/${crewmate.id}`}>View Details</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default CrewmateCard;
