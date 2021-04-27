<template>
  <div class="container">
    <Navbar />
    Here are some External assets:<br><br><br>

    Font:<br>
    Here is a <span class="custom-font">cool font</span><br><br><br>

    Image:<br>
    <img src="https://images.pexels.com/photos/1461812/pexels-photo-1461812.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />

  </div>
</template>
 
<script>
  export default {
    head() {
      return {
        link: {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Orelega+One'
        }
      }
    }
  }
</script>

<style scoped>
  .custom-font {
    font-family: 'Orelega One', cursive;
    font-size: 55px;
  }
</style>