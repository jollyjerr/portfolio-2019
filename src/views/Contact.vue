<template>
  <main class="contact">
    <header>
      <h1>Contact</h1>
      <p>yadayadayadayada:</p>
    </header>
  </main>
</template>

<script>
import Portfolio from '@/components/Portfolio.vue'
export default {
  name: 'contact',
  components: {
  }
}
</script>

<style lang="scss">
@import '../assets/variables.scss';
.contact {
    header {
        padding: $normal;
    }
    p {
        color: $title;
    }
}
</style>