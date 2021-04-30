<template>
  <div class="container">
    <div>

      <Navbar-Recipe />
      I am a dynamic page!<br><br>

      And  I have recieved the below paramaters from my parent:<br>
      {{this.$route.params}}<br><br>

      My path is:<br>
      Path: {{ $route.path }}<br><br>

      Click here to go back to my parent:<br>
      <NuxtLink :to="'/recipes/'">Go back</NuxtLink>

    </div>
  </div>
</template>

<script>
  export default {}
</script>