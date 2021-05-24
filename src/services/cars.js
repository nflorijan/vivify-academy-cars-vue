import axios from 'axios'

export default class Cars {
  constructor() {
    const instance = axios.create({
      baseURL: 'http://localhost:3000/api',
    });
    this.client = instance;
  }

  async getAllCars() {
    const { data } = await this.client.get('cars');
    return data;
  }
}


export const cars = new Cars()