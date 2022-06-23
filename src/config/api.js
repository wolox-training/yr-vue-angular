import { create } from 'apisauce';
const URI = '/api/v1/'

export const api = create({
    baseURL: `https://books-training-rails.herokuapp.com${URI}`,
})
