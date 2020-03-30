import axios from 'axios';

export const getCovidInfoByCountry = country => {
  const url = `https://corona.lmao.ninja/countries/:${country}`;
  axios
    .get(url)
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
};

export default {
  getCovidInfoByCountry
};
