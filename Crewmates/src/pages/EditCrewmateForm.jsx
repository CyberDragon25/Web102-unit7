// src/pages/EditCrewmateForm.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';

function EditCrewmateForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [attribute, setAttribute] = useState('');

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase.from('crewmates').select('*').eq('id', id).single();
      if (error) console.error('Error fetching crewmate:', error);
      else {
        setName(data.name);
        setAttribute(data.attribute);
      }
    };
    
    fetchCrewmate();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from('crewmates')
      .update({ name, attribute })
      .eq('id', id);
    if (error) {
      console.error('Error updating crewmate:', error);
    } else {
      navigate(`/crewmates/${id}`);
    }
  };

  return (
    <div>
      <h2>Edit Crewmate</h2>
      <form onSubmit={handleUpdate}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Attribute:
          <input
            type="text"
            value={attribute}
            onChange={(e) => setAttribute(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Update Crewmate</button>
      </form>
      <button onClick={() => navigate(`/crewmates/${id}`)}>Cancel</button>
    </div>
  );
}

export default EditCrewmateForm;
