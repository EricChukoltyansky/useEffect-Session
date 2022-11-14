import React from 'react';

function Avatar({ data }) {
  return (
    <div style={{ width: '150px' }}>
      <h2>name: {data.name}</h2>
      <img src={data.img} alt={data.name} />
    </div>
  );
}

export default Avatar;
