import wrapper from './wrapper'
import dotenv from 'dotenv';
dotenv.load()

const api = new wrapper

api.getClasses( (body) => {
  console.log(body)
})