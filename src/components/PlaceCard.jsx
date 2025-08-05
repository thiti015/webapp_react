// components/PlaceCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const PlaceCard = ({ place }) => {
  return (
    <div className="card">
      <img src={place.image} alt={place.name} />
      <h3>{place.name}</h3>
      <p>{place.location}</p>
      <Link to={`/place/${place.id}`}>ดูเพิ่มเติม</Link>
    </div>
  );
};

export default PlaceCard;
