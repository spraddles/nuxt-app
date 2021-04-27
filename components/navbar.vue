<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="">
      <b-navbar-brand href="#">
        <img src="https://getbootstrap.com/docs/4.6/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/global-head">Global_head</NuxtLink>
          <NuxtLink to="/local-head">Local_head</NuxtLink>
          <NuxtLink to="/parent">Parent_child</NuxtLink>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  .navbar { 
    background-color:#e9ecef; 
    margin-bottom: 20px;
  }
  .navbar a {
    margin-right: 30px;
  }
</style>