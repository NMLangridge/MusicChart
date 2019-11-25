import React from 'react';

const EntryDetail = (props) => {
  if (!props.entry) return null;
  return (
    <div>
      <h3>{props.entry.title.label}</h3>
      <p>{props.entry.title.label}</p>
    </div>
  );
}

export default EntryDetail;
