<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/projects">Projects</router-link>
    </nav>
    <router-view/>
    <footer>
      <h3>Footer</h3>
    </footer>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');
#app {
  font-family:'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
