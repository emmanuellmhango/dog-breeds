import React from 'react';
import PropTypes from 'prop-types';
import '../pages/Home.css';
import Image from '../operations/GetCardImage';

const BreedCard = ({ breedName, breedSubCategories}) => { 
  const cardImg = Image(breedName);
  const subcat = breedSubCategories.length;
  return (
    <div
      style={{
        backgroundImage: `url(${cardImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}>
      <div className="card">
        <span className="breed-title">
          {breedName.toUpperCase()}
        </span>
        <span className="breed-categories">
          {subcat}
        </span>
      </div>
    </div>
  );
};

BreedCard.propTypes = {
  breedName: PropTypes.string.isRequired,
  breedSubCategories: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])).isRequired,
};

export default BreedCard;