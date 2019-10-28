<template>
  <div id="app">
    <nav id="nav">
      <img src="./assets/logo.jpeg" alt="hello world">
      <router-link to="/">Home</router-link> 
    </nav>
    <router-view/>
    <footer id="footer">
      <h3>Footer</h3>
    </footer>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');
@import './assets/variables.scss';
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
#app {
  font-family:'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text;
  background-color: $background;
  width: 100%;
  height: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: $title;
    padding: 0 $normal;
    position: absolute;
    right: 0;
    &.router-link-exact-active {
      color: $important;
    }
  }
  img {
    width: 5rem;
    border-radius: 100%;
  }
}
#footer {
  width:100%;
  height:60px;   /* Height of the footer */
  background-color: $dull;
}
</style>
