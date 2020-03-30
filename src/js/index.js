import './constants';
import { people, groceries } from './data';
import { Observable } from 'rxjs/Observable';
import { of, map } from 'rxjs/operators';
import axios from 'axios';
// import getCovidInfoByCountry from './networkApi';

const getCovidInfoByCountry = country => {
  const url = `https://corona.lmao.ninja/countries/:${country}`;
  try {
    axios
    .get(url)
    .then(data => {
      const jsonInfo = toJSON(data);
      console.log(jsonInfo);
    })
    .catch(err => {
      console.log('Something went wrong');
      console.log(err);
    });
  } catch (err) {
    console.log(`cbsError: `, err);
  }
};

getCovidInfoByCountry('usa');
