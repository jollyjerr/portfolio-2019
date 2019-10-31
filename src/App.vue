<template>
  <div id="app">
    <nav id="nav">
      <img src="./assets/logo.jpeg" alt="hello world">
      <div class="nav-links">
        <router-link to="/">Home</router-link> 
        <router-link to="/projects">Code</router-link> 
        <router-link to="/music">Music</router-link> 
        <router-link to="/contact">Contact</router-link> 
      </div>
    </nav>
    <router-view/>
    <footer id="footer">
      <a href="https://www.linkedin.com/in/jeremiahtabb/" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-linkedin-in"></i>
      </a>
      <a href="https://github.com/jollyjerr" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://twitter.com/JerrTabb" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="https://medium.com/@jollyjerr" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-medium-m"></i>
      </a>
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
  padding: 10px;
  height: 60px;
  border-bottom: 1px solid $dull;
  .nav-links {
    display: inline;
    // margin-top: 35px;
  }
  a {
    // font-weight: bold;
    transform: scale(150);
    padding: 0 5%;
    color: $title;
    text-decoration: none;
    justify-self: center;
    &.router-link-exact-active {
      color: $important;
      border-bottom: 2px solid $important;
    }
    @media only screen and (max-width: 600px) {
      padding: 0 2%;
    }
  }
  a:hover {
      border-bottom: 2px solid $dull;
  }
  img {
    width: 5rem;
    border-radius: 100%;
  }
}
#footer {
  width:100%;
  height: 40px;  
  background-color: $dull;
  display: flex;
  justify-content: space-evenly;
  i {
    color: $background;
    font-size: 170%;
    padding-top: 4px;
  }
}
</style>
