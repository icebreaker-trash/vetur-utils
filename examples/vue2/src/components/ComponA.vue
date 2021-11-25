<template>
  <div>fdsfsdafsd</div>
</template>

<script>
export default {
  props: {
    str: {
      type: [String],
      default: ''
    },
    num: {
      type: [Number],
      default: 0
    },
    obj: {
      type: [Object],
      default: () => {}
    },
    func: {
      type: [Function],
      default: () => () => {}
    }
  }
}
</script>

<style>
</style>
