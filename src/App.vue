<template>
  <div id="app">
    <main>
      <div class="sidebar"><navigation></navigation></div>
      <div class="content mw8 mr-auto ml-auto mv4">
        <div class="card bg-white pa3 br2">
          <router-view></router-view>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';

export default {
  name: 'app',
  components: { Navigation },
};
</script>

<style>
body {
  margin: 0;
  background-color: #ffdfef78;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.sidebar {
  left: 0;
  top: 0;
  bottom: 0;
  max-width: 350px;
  min-width: 300px;
  height: 100%;
  background: white;
  border-right: 1px solid #f5dae7;
  overflow-y: auto;
  color: #fff;
  position: fixed;
  padding-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495e;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

.bg-steel-grey {
  background: #f5f6f9;
}

.card {
  box-shadow: 0 0.4rem 0.8rem -0.1rem rgba(0, 32, 128, 0.1), 0 0 0 1px #f0f2f7;
}
</style>
