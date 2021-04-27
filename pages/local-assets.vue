<template>
  <div class="container">
    <Navbar />
    Here are some Local assets:<br><br><br>

    Font:<br>
    Here is a <span class="custom-font">cool font</span><br><br><br>

    Image:<br>
    <img src="~/assets/images/book.png" />

  </div>
</template>
 
<script>
  export default {}
</script>



<style scoped>
  img {
    width: 200px;
  }
  @font-face {
    font-family: 'stacylia';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('~assets/fonts/stacylia.otf') format('truetype');
  }
  .custom-font {
    font-family: stacylia;
    font-size: 55px;
  }
</style>