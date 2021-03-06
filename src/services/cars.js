import axios from 'axios'

export default class Cars {
  constructor() {
    const instance = axios.create({
      baseURL: 'http://localhost:3000/api',
    });
    this.client = instance;
  }

  async getAll() {
    const { data } = await this.client.get('cars');
    return data;
  }

  add (car) {
    return this.client.post('cars', car)
  }

  get (id) {
    return this.client.get(`cars/${id}`)
  }

  edit (car) {
    return this.client.put(`cars/${car.id}`, car)
  }

  delete(id) {
    return this.client.delete(`cars/${id}`)
  }
}


export const cars = new Cars()