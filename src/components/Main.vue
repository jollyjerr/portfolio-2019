<template>
  <div class="landing-container">
    <header>
      <h1>Jeremiah Tabb</h1>
      <h2>Full Stack Software Engineer</h2>
    </header>
   
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/variables.scss';
  .landing-container {
    display: flex;
    justify-content: flex-end;
    padding: $normal;
  }
</style>
