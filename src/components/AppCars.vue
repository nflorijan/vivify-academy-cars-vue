<template>
  <div>
    <CarList :cars="cars"></CarList>
  </div>
</template>
<script>
import CarList from './CarList.vue'
import { cars } from '../services/cars'

export default {
  components: {
    CarList
  },
  data () {
    return {
      cars: []
    }
  },
  async created() {
    console.log(cars.getAllCars())
  }
}
</script>