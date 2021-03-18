import axios from 'axios';

export const ironBeers = async () => {
  const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers`);
  const body = response.data;
  return body;
};

export const ironBeer = async (id) => {
  const response = await axios.get(
    `https://ih-beers-api2.herokuapp.com/beers/${id}`
  );
  return response.data;
};

export const randomBeer = async () => {
  const response = await axios.get(
    `https://ih-beers-api2.herokuapp.com/beers/random`
  );
  return response.data;
};
