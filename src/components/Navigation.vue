<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item>
          <router-link :to="{ name: 'cars' }">Cars</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link :to="{ name: 'add' }">Add Car</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
</div>
</template>

<script>
export default {
}
</script>