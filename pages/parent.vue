<template>
  <div class="container">
    <Navbar />
    <child/>

  </div>
</template>
 
<script>
import child from "./child.vue";
 
export default {
  components: {
    child
  },
  data() {
    return {
      user: {
        username: '',
        lastname: '',
        firstname: ''
      }
    }
  }
}
</script>