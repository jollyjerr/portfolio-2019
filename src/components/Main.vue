<template>
  <div>
    <div class="landing-container">
        <img src="../assets/welcome.jpeg" alt="This is a picture of me!">
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
  .landing-container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: $normal;
    img {
      width: 25rem;
      border-radius: $phstandard;
      @media only screen and (max-width: 600px) {
        width: 100%
      }
    }
    h3 {
      color: $title;
    }
  }
  .main-projects{
    background-color: $background;
    width: 100%;
    height: 60px;
    padding: $normal
  }
  .main-music {
    background-color: $background;
    width: 100%;
    height: 60px;
    padding: $normal;
  }
</style>
