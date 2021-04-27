<template>
  <div>
    {{user.info}}
  </div>
</template>

<script>
  export default {
    props: ['username'],
    data() {
      return {
        user: {
          info: 'this data is from a child component',
          username: 'Username',
          lastname: 'Last Name',
          firstname: 'First Name'
        }
      }
    }
  }
</script>