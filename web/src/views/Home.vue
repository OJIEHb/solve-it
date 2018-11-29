<template>
  <div>
    <div class="title">
      <div class="md-display-3">Solve it</div>
      <div class="md-display-1">Is service that solving optimization problem using bioinspired algorithms</div>
    </div>
    <img class="bottom-divider" src="@/assets/bottom-divider.svg">
    <vue-particles
      class="particles"
      color="#dedede"
      :particleOpacity="0.8"
      :particlesNumber="50"
      shapeType="circle"
      :particleSize="6"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.5"
      :linesDistance="150"
      :moveSpeed="4"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
  </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style lang="scss" scoped>
  .bottom-divider {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
  }

  .title {
    position: absolute;
    width: 80%;
    left: 0;
    top: 20%;
    right: 0;
    margin: auto;
    text-align: center;
  }

  .particles {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
