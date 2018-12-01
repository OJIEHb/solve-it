<template>
  <div class="md-layout md-alignment-top-center">
    <div class="md-layout-item md-size-60">
      <md-button class="md-raised md-primary" @click="$emit('input', null)">Back</md-button>
      <md-divider></md-divider>
      <span class="md-headline">Solution</span>
      <div class="md-subheading">Position x*:
        <div class="md-subheading coordinate" v-for="(coordinate, i) in value.best.position">
          x{{i}} = {{coordinate}};
        </div>
      </div>
      <div class="md-subheading">Value f(x*): {{value.best.value}}</div>
      <div class="md-subheading">Iterations: {{value.iterationNumber}}</div>
      <md-divider></md-divider>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'grey-wolf-result',
    props: ['value']
  }
</script>

<style lang="scss" scoped>
  .coordinate {
    padding-top: 5px;
    padding-left: 20px;
  }

  .md-subheading {
    padding-top: 5px;
  }
</style>
