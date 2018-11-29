<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar>
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Solve it</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-app-toolbar>
          <span class="md-title">Solve it</span>
        </md-app-toolbar>
        <md-list class="side-menu">
          <md-list-item>
            <md-icon md-src="./assets/icons/wolf.svg" />
            <span class="md-list-item-text">Grey wolf</span>
          </md-list-item>
          <md-list-item>
            <md-icon md-src="./assets/icons/bat.svg" />
            <span class="md-list-item-text">Bat gang</span>
          </md-list-item>
          <md-list-item>
            <md-icon md-src="./assets/icons/planet.svg" />
            <span class="md-list-item-text">Gravitational search</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>



<script>
  export default {
    data() {
      return {
        menuVisible: false
      }
    }
  }
</script>


<style lang="scss" scoped>
  .md-app {
    min-height: 100vh;
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .md-app-content {
    height: 100%;
  }

  .side-menu {
    top: 64px;
  }
</style>
