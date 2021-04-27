<template>
  <div class="container">
    <Navbar />
    This is a parent page, but...
    <child />
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
        info: '',
        username: '',
        lastname: '',
        firstname: ''
      }
    }
  }
}
</script>