import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import '../pages/Home.css';
import Image from '../operations/GetCardImage';

const BreedCard = ({ breedName, breedSubCategories }) => {
  const cardImg = Image(breedName);
  const subcat = breedSubCategories.length;
  const navigate = useNavigate();
  const handleNavigate = () => navigate('/details', { state: [breedName, breedSubCategories] });
  return (
    <div
      style={{
        backgroundImage: `url(${cardImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
      onClick={handleNavigate}
      onKeyDown={handleNavigate}
    >
      <div className="card">
        <div className="icon">
          <FaRegArrowAltCircleRight />
        </div>
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
