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
        <a href="https://drive.google.com/file/d/1zwKq59CRYwrip2ExyicfqG165mbFsegh/view?usp=sharing" target="_blank" class="resume info-box" >
          <div>
            <i class="fas fa-scroll" id="resume-icon" ></i>
            <label for="resume-icon">Resume</label> 
          </div>
        </a>
      </div>
      <div class="main-contact" >
        <a href="mailto:tabbjeremiah@gmail.com">
          <div class="email">
            <i class="fas fa-envelope"></i>
            <p>tabbjeremiah@gmail.com</p>
          </div>
        </a>
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
    padding-bottom: 0;
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
    .resume:hover {
      cursor: pointer;
      -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
      -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
      box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    }
    a {
          color: $text;
          text-decoration: none;
    }
  }
  .main-contact {
    background-color: $background;
    height: 60px;
    padding: $normal;
    a {
      text-decoration: none;
    }
    .email {
      display: flex;
      justify-content: center;
      background-color: $title;
      padding: 1rem;
    }
    i {
      font-size: 150%;
      color: $text;
      display: block;
      width: max-content;
      margin: auto 0;
    }
    p {
      display: block;
      width: max-content;
      color: $text;
      margin: auto 4px;
    }
    .email:hover {
      cursor: pointer;
      -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
      -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
      box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    }
  }
</style>
