<template>
  <div>
    <div class="landing-container">
      <header>
        <h1>Jeremiah Tabb</h1>
        <h3>Full Stack Software Engineer</h3>
        <h3>Composer</h3>
      </header>
    </div>
      <div class="main-projects" >

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
    justify-content: flex-end;
    padding: $normal;
  }
  .main-projects{
    background-color: $secondary;
    width: 100%;
    height: 60px;
  }
  .main-music {
    background-color: $important;
    width: 100%;
    height: 60px;
  }
</style>
