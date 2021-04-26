<template>
  <div class="container">
    <div>
      <Navbar />
      Custom 'HEAD' meta (see inspect)
    </div>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: 'Custom local meta',
        meta: [
          { local_meta_1: 'local-description-1', name: 'local-name-1', content: 'local-content-1' },
          { local_meta_2: 'local-description-2', name: 'local-name-2', content: 'local-content-2' }
        ],
      }
    }
  }
</script>