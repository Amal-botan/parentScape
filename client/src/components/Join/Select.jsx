import React from 'react';

const Select = ({ state }) => {
  return (
    <select
      className='role-selector'
      value={state.role}
      name='Choose Roles'
      onChange={(e) => state.setRole(e.target.value)}
    >
      <option value='listener'>Listener (can only listen)</option>
      <option value='speaker'>Speaker (can speak & listen) </option>
      <option value='moderator'>Moderator (controls other users)</option>
    </select>
  );
};

export default Select;
