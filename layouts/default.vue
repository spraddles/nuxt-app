<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
  @media (min-width: 1200px) {
    .container, .container-sm, .container-md, .container-lg, .container-xl {
      max-width: initial;
    }
  }
  @font-face {
    font-family: 'f37ginger';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('~assets/fonts/f37ginger.ttf') format('truetype');
  }
  .custom-font {
    font-family: f37ginger;
    font-size: 55px;
  }
  body {
    font-family: 'f37ginger';
  }
</style>