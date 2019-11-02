<template>
  <main class="projects">
    <header>
      <h1>Code</h1>
      <p>I develop full stack web applications:</p>
      <div class="language-icons" >
        <i class="devicon-ruby-plain colored"></i>
        <i class="devicon-rails-plain colored"></i>
        <i class="devicon-nodejs-plain colored"></i>
        <i class="devicon-express-original colored"></i>
        <i class="devicon-csharp-plain colored"></i>
        <i class="devicon-dot-net-plain colored"></i>
        <i class="devicon-python-plain colored"></i>
        <i class="devicon-react-original colored"></i>
        <i class="devicon-vuejs-plain colored"></i>
      </div>
    </header>
    <Portfolio :projects="projects" />
  </main>
</template>

<script>
import Portfolio from '@/components/Portfolio.vue'
export default {
  name: 'projects',
  components: {
    Portfolio
  },
  computed: {
    projects() {
      return this.$store.state.projects
    }
  }
}
</script>

<style lang="scss">
@import '../assets/variables.scss';
.projects {
    header {
        padding: $normal;
        padding-bottom: 0;
    }
    p {
        color: $title;
    }
    .language-icons {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: nowrap;
      i {
        font-size: 250%;
      }
      @media only screen and (max-width: 400px) {
        flex-wrap: wrap;
      }
    }
}
</style>
