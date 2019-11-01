<template>
  <div class="home-main">
    <div class="landing-container">
      <div class="image-container"  >
        <img src="../assets/welcome.jpeg" alt="This is a picture of me!">
      </div>
      <header>
        <h1>Jeremiah Tabb</h1>
        <h3>Full Stack Software Engineer</h3>
        <h3>Composer</h3>
      </header>
    </div>
      <div class="main-projects" >
        <h2></h2>
      </div>
      <div class="main-music" >

      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
@import '../assets/variables.scss';
  .home-main {
    width: 100%;
  }
  .landing-container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: $normal;
    .image-container {
      display: block;
      width: 25rem;
      max-height: 400px;
      @media only screen and (max-width: 600px) {
        width: 100%
      }
      img { // BUG this is failing on mobile devices but not chrome simulations
        width: auto;
        max-width: 100%;
        height: auto;
        border-radius: $phstandard;
      }
    }
    h3 {
      color: $title;
    }
  }
  .main-projects{
    background-color: $background;
    height: 60px;
    padding: $normal
  }
  .main-music {
    background-color: $background;
    height: 60px;
    padding: $normal;
  }
</style>
