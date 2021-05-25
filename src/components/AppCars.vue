<template>
  <div class="row">
    <div class="card col-md-2" v-for="car in allCars" :key="car.id">
      <div class="card-body">
        <h5 class="card-title">{{ car.brand }}</h5>
        <p class="card-text">Model: {{ car.model }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Year: {{ car.year }}</li>
        <li class="list-group-item">Number of doors: {{ car.numberOfDoors }}</li>
        <li class="list-group-item">Maximum speed: {{ car.maxSpeed }}</li>
        <li class="list-group-item">{{ car.isAutomatic ? 'Automatic' : 'Manual' }}</li>
        <li class="list-group-item">Engine: {{ car.engine }}</li>
      </ul>
      <div class="card-body">
        <router-link :to="{ name: 'edit', params: { id: car.id } }" class="card-link">Edit</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { cars } from '../services/cars'

export default {
  data() {
    return {
      allCars: Array
    }
  },
 async created() {
   this.allCars = await cars.getAll()
  }
}
</script>