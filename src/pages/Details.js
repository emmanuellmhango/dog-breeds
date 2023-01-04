import React from 'react';
import uuid from 'react-uuid';
import { NavLink, useLocation } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import Image from '../operations/GetCardImage';
import Images from '../operations/RandomPics';
import breedImages from '../operations/BreedPics';
import './Details.css';

const Details = () => {
  const breedName = useLocation().state[0];
  const breedSubCategories = useLocation().state[1][0];
  const breedCatLen = breedSubCategories.length;
  const breedDetails = breedName.toString().toUpperCase();
  const breedRandImg = Image(breedName);
  return (
    <div className="itemContainer">
      <div className="nav-back">
        <NavLink to="/" className="back-link">
          <span className="icon-back">
            <FaChevronLeft />
            <span className="back-text">Home</span>
          </span>
        </NavLink>
      </div>
      <div className="breedname-details-header">
        <div
          style={{
            backgroundImage: `url(${breedRandImg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '60%',
            height: '100%',
          }}
        />
        <div className="details-header">
          <span className="breed-name">
            {breedDetails}
            BREED
          </span>
          <br />
          <span className="breed-cat">
            {breedCatLen}
          </span>
        </div>
      </div>
      <div className="details-stats">
        {breedDetails}
        SUB BREEDS
      </div>
      <div className="details">
        <ul className="subcategories-details">
          {breedCatLen < 1 ? (
            <>
              <li className="category-li">
                <div className="subcategory">
                  No sub-breeds found
                </div>
                <div className="sub-img">
                  <span className="make-bold">0</span>
                  <br />
                  sub-breeds
                </div>
              </li>
              <li className="category-li">
                <div className="subcategory">
                  Images Available
                </div>
                <div className="sub-img">
                  <span className="make-bold">{breedImages(breedName)}</span>
                  <br />
                  Images
                </div>
              </li>
            </>
          ) : (
            breedSubCategories.map((sub) => (
              <li className="category-li" key={uuid()}>
                <div className="subcategory">
                  {sub}
                </div>
                <div className="sub-img">
                  <span className="make-bold">{Images(breedName, sub)}</span>
                  <br />
                  Pictures
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Details;
