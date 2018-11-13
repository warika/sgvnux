<template lang="html">
  <div class="">

    <div
      v-for="color in getColors"
      class="d-inline-block color-width mr-1 pointer"
      :style="{'background-color': color.hex}"><br>
      <small class="font-small">{{color.name}}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VColorPallet',
  props: {
    colors: {
      type: Array,
      required: false,
      default() {
        return []
      }
    }
  },
  computed: {
    getColors() {
      return this.$store.state.colors.filter(v => {
        return this.colors.includes(v.name)
      })
    }
  }
}
</script>

<style lang="css" scoped>
.font-small{
  font-size: 10px
}
.no-image {
  opacity: 0.5;
}
.color-width {
  border-radius: 10px;
  width: 30px;
  height: 25px;
}
</style>
