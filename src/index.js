import express from 'express';
import {app} from './consts';
import dotenv from 'dotenv';
import wrapper from './wrapper'
dotenv.load()

//here routes defined
import './routes';

app.listen(3000, () => {
  let api = new wrapper

  api.getClasses( (body) => {
    console.log(body)
  })
  console.log('ES6 application listening on port 3000!');
});
