<template>
    <main class="music" >
        <header>
            <h1>Music</h1>
            <p>I write contemporary classical music:</p>
            <div class="music-icons" >
                <a href="https://www.youtube.com/channel/UCqHFIUDlxvNGhaKBYPhjIBw" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-youtube"></i>
                </a>
                <a href="https://jeremiahtabb.bandcamp.com/" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-bandcamp"></i>
                </a>
                <a href="https://soundcloud.com/jeremiah-tabb-802138204" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-soundcloud"></i>
                </a>
            </div>
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
        padding-bottom: 0;
    }
    p {
        color: $title;
    }
}
.music-icons {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: nowrap;
      i {
        font-size: 250%;
      }
      a {
          text-decoration: none;
          color: $text;
      }
    }
</style>
