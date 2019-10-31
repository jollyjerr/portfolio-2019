<template>
    <main class="music" >
        <header>
            <h1>Music</h1>
        </header>
        <MusicPlayers />
    </main>
</template>

<script>
import MusicPlayers from '@/components/MusicPlayers.vue'

export default {
  name: 'music',
  components: {
    MusicPlayers
  }
}
</script>

<style lang="scss">
@import '../assets/variables.scss';
.music {
    header {
        padding: $normal;
    }
}
</style>
