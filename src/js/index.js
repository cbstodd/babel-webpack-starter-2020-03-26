import './constants';
import people from './data';
import { Observable } from 'rxjs/Observable';
import { of, map } from 'rxjs/operators';

const allPeople = [];

Observable.create(subscriber => {
     const users = Object.keys(people).map(key => people[key]);
     subscriber.next(users);
  subscriber.complete();
}).subscribe(user => {
  user.map(usr => this.allPeople = usr);
});

// for (const _key in users) {
//   if (users.hasOwnProperty(_key)) {
//     const element = users[_key];
//   }
// }

console.table(await allPeople);

// const listUsers = _users => {
//   if (_users) {
//     return _users.forEach(usr => usr);
//   } else {
//     console.error(`cbsError: Could not get users`);
//   }
// };

// const allUsers = listUsers(people);

console.log(people);
