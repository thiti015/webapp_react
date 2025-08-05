// pages/Home.jsx
import React, { useState } from 'react';
import places from '../data/places.json';
import PlaceCard from '../components/PlaceCard';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [search, setSearch] = useState('');
  const filteredPlaces = places.filter(place =>
    place.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <SearchBar onSearch={setSearch} />
      <h1>สถานที่ท่องเที่ยวยอดนิยม</h1>
      <div className="grid">
        {filteredPlaces.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default Home;
