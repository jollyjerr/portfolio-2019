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
        <div class="location info-box">
          <i class="fas fa-map-marker-alt" id="map-icon" ></i>
          <label for="map-icon">Denver, CO</label>
        </div>
        <div class="resume info-box">
          <a href="https://drive.google.com/file/d/1zwKq59CRYwrip2ExyicfqG165mbFsegh/view?usp=sharing" target="_blank" ><i class="fas fa-scroll" id="resume-icon" ></i></a>
          <label for="resume-icon">Resume</label> 
        </div>
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
    @media only screen and (max-width: 600px) {
      padding-bottom: 0;
    }
  }
  .main-projects{
    background-color: $background;
    height: max-content;
    padding: $normal;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .info-box {
      height: 100%;
      width: 46%;
      padding: 2%;
      @media only screen and (max-width: 600px) {
        width: 100%
      }
      i {
        display: block;
        width: max-content;
        margin: auto;
        transform: scale(1.3);
      }
      label {
        display: block;
        width: max-content;
        margin: auto;
        transform: scale(1.3);
      }
    }
    .location {
      background-color: $secondary;
    }
    .resume {
      background-color: $important;
    }
  }
  .main-music {
    background-color: $background;
    height: 60px;
    padding: $normal;
  }
</style>
