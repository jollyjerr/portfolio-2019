<template>
    <main class="music" >
        <header>
            <h1>Music</h1>
            <p>I write contemporary classical music:</p>
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
    p {
        color: $title;
    }
}
</style>
