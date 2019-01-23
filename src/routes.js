import {app} from './consts';
import request from 'request';

app.get('/', (req, res) => {
  res.send('Hello world node.js es6 app.');
});
