export const GET_BREEDS = 'dog-breeds/redux/GET_BREEDS';

const initialData = [];

export const getBreeds = (breeds) => ({
  type: GET_BREEDS,
  payload: breeds,
});

export default function breedsReducer(state = initialData, action) {
  switch (action.type) {
    case `${GET_BREEDS}/fulfilled`:
      return Object.keys(action.payload).map((key) => ({
        breedName: key,
        subCategories: [action.payload[key]],
      }));
    default:
      return state;
  }
}
