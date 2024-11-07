// src/components/CreateCrewmateForm.jsx
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

function CreateCrewmateForm() {
  const [name, setName] = useState('');
  const [attribute1, setAttribute1] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('crewmates')
      .insert([{ name, attribute1 }]);
    if (error) console.error(error);
    else console.log('Crewmate added:', data);
    setName('');
    setAttribute1('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Attribute 1"
        value={attribute1}
        onChange={(e) => setAttribute1(e.target.value)}
        required
      />
      <button type="submit">Add Crewmate</button>
    </form>
  );
}

export default CreateCrewmateForm;
