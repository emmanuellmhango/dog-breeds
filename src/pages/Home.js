import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';

import BreedCard from "../components/BreedCard";
import './Home.css';

const Home = () => {
  const breeds = useSelector((state) => state.breeds);

  return (
    <>
      <div className="header">
        <div className="header-card">
          some pic
        </div>
        <div className="header-card">
          <span className="header-title">
            KNOW YOUR DOG
          </span>
        </div>
      </div>
      <div className="stats">
        <span>DOG BREEDS</span>
      </div>
      <div className="container">
        {
          breeds.map((breed) => (
            <NavLink to="/details" key={`${breed}-${uuid()}`} className="card-link">
              <BreedCard breedName={breed.breedName} breedSubCategories={breed.subCategories} />
            </NavLink>
          ))
        }
      </div>
    </>
  );
}

export default Home;