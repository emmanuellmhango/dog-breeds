import { createAsyncThunk } from '@reduxjs/toolkit';
import BASE_URL from './BASE_URL';

const GET_BREEDS = 'dog-breeds/redux/GET_BREEDS';

const httpGet = async (theUrl) => {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theUrl, false );
  xmlHttp.send( null );
  return xmlHttp.responseText;
}

const fetchBreeds = createAsyncThunk(GET_BREEDS, async () => {
  const response = await httpGet(BASE_URL);
  const result = JSON.parse(response);
  const data = result.message;
  return data;
});

export default fetchBreeds;
