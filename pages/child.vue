<template>
  <div>
    {{user.username}}
  </div>
</template>

<script>
  export default {
    props: ['username'],
    data() {
      return {
        user: {
          username: 'This is from a child component',
          lastname: 'Last Name',
          firstname: 'First Name'
        }
      }
    }
  }
</script>