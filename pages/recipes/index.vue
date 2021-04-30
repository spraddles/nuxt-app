<template>
  <div class="container">
    <div>

      <Navbar-Recipe />

      <div class="heading-container">
        <div class="heading">Nourishing your pupper, <br>one recipe at a time</div>
        <button class="heading-button">Read our philisophy</button>
      </div>

      <div class="recipes-container">
        <div class="sub-heading">Our Recipes</div>
        <b-row>
          <b-col md="6" class="recipe" v-for="recipe in recipes" :key="recipe.id">
            <img class="recipe-image" :src="recipe.image_url" />
            <div class="recipe-title">{{recipe.name}}</div>
            <div class="recipe-sub-title">{{recipe.type}}</div>
            <NuxtLink class="recipe-button" :to="'/recipes/' + recipe.slug">See more</NuxtLink>
          </b-col>
        </b-row>
      </div>

    </div>
  </div>
</template>

<script>
  import jsonData from '../../data/recipes.json';
  export default {
    data() {
      return {
        recipes: jsonData
      }
    }
    /*alternate way of doing the same thing:
    async asyncData() {
      const recipes = jsonData
      return {recipes}
    }*/
  }
</script>

<style scoped lang="sass">

  .container
    text-align: center

    .heading-container
      background-color: #dbe6dc
      padding: 100px 250px
      
      .heading
        font-size: 45px
        font-weight: bold
        color: #005648
        margin-bottom: 50px
    
    .recipes-container
      font-size: 30px
      font-weight: bold
      color: #005648
      padding: 80px 50px

      .recipe
        margin-top: 50px

      .recipe-image
        max-width: 100%
        max-height: 450px
        margin-bottom: 10px

      .recipe-title
        font-size: 20px

      .recipe-sub-title
        font-size: 19px
        color: #10b193

  button
    border-radius: 50px
    padding: 5px 10px
    border: none
    font-size: 13px

    &.heading-button
      background-color: #ff886b
      color: #fff

  .recipe-button
    border-radius: 50px
    padding: 5px 10px
    border: none
    font-size: 13px
    background-color: #dbe6dc
    color: #005648

</style>