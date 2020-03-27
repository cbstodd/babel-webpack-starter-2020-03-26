import './constants';
import people from './data';
import { Observable } from 'rxjs/Observable';
import { of, map } from 'rxjs/operators';

console.table(people);
