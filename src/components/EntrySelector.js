import React from 'react';

const EntrySelector = (props) => {
  const options = props.entries.map((entry, index) => {
    return <option value={index} key={index}>{entry.name}</option>
  })

  function handleChange(event) {
    props.onEntrySelected(event.target.value);
  }

  return (
    <select id="entry-selector" onChange={handleChange} defaultValue="default">
    <option disabled value="default">Choose an entry...</option>
    {options}
    </select>
  )

}

export default EntrySelector;
