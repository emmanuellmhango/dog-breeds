export const GET_SUBBREEDS = 'dog-breeds/redux/GET_SUBBREEDS';

const initialData = [];

export const getSubBreeds = (subbreeds) => ({
  type: GET_SUBBREEDS,
  payload: subbreeds,
});

export default function breedsReducer(state = initialData, action) {
  switch (action.type) {
    case `${GET_SUBBREEDS}/fulfilled`:
      return Object.keys(action.payload).map((key) => ({
        subBreeds: [`${action.payload[key]}`],
      }));
    default:
      return state;
  }
}
