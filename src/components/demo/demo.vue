<template>
  <split-page :count='count' :limit="limit" @page="changePage"></split-page>
</template>
<script>
  import SplitPage from '@/components/split-page/split-page'
  export default {
    data() {
      return {
        count: 8,
        limit: 7
      }
    },
    methods: {
      changePage(index) {
        console.log(index)
      }
    },
    components: {
      SplitPage
    }
  }
</script>

<style lang="scss" scoped>

</style>
