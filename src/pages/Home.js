import React from "react";
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';
import Image from '../operations/GetRandomImage';
import BreedCard from "../components/BreedCard";
import './Home.css';

const Home = () => {
  const breeds = useSelector((state) => state.breeds);
  const headerImg = Image();
  return (
    <>
      <div className="header">
        <div className="header-card">
          <div style={{
            backgroundImage: `url(${headerImg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
          }}>
          </div>
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
      <div>
        <ul className="breeds container">
        {
            breeds.map((breed) => (
            <li className="breed-category" key={uuid()}>
              <BreedCard breedName={breed.breedName} breedSubCategories={breed.subCategories} />
            </li>
          ))
        }
        </ul>
      </div>
    </>
  );
}

export default Home;