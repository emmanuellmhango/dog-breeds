import { getBreeds } from './breedsReducers';

describe('breedsReducer.js test', () => {
  it('Expect type of reservation of rocket to be RESERVE_ROCKET', () => {
    // Arrange
    const breed = {};

    // Act
    const result = getBreeds(breed);

    // Assert
    expect(result.type).toBe('dog-breeds/redux/GET_BREEDS');
  });
  it('Expects the rockets to be an object', () => {
    // Arrange
    const breed = {};

    // Act
    const result = getBreeds(breed);

    // Assert
    expect(typeof result.payload).toBe('object');
  });
});
