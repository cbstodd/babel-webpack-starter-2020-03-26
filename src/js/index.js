import './constants';
import people from './data';

const listUsers = _users => {
  if (_users) {
    return _users.forEach(usr => usr);
  } else {
    console.error(`cbsError: Could not get users`);
  }
};

// const allUsers = listUsers(people);

console.log(people);
