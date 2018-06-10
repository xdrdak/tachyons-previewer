<template>
  <div id="app">
    <main>
      <div class="sidebar">
        <navigation></navigation>
      </div>
      <div class="content mw8-l mr-auto ml-auto mv4">
        <div class="paper pa3 br2">
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
  height: 100%;
  background: white;
  border-right: 1px solid #f5dae7;
  overflow-y: auto;
  color: #fff;
  position: fixed;
  padding-top: 40px;
  display: none;
}

@media (min-width: 1140px) {
  .sidebar {
    display: block;
    max-width: 250px;
    min-width: 200px;
  }
}

.content {
  padding-left: 125px;
}

.bg-steel-grey {
  background: #f5f6f9;
}

.paper {
  background: white;
  box-shadow: 0 0.4rem 0.8rem -0.1rem rgba(0, 32, 128, 0.1), 0 0 0 1px #f0f2f7;
}

table {
  text-align: justify;
  width: 100%;
  border-collapse: collapse;
}

table td,
table th {
  padding: 0.5em;
  border-bottom: 1px solid #073642;
}
</style>
