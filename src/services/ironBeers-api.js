import axios from 'axios';

export const ironBeers = async () => {
  const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers`);
  const body = response.data;
  return body;
};
