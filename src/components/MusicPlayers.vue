<template> 
    <div class="music-players" >
        <iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=2523047846/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/" seamless>
            <a href="http://jeremiahtabb.bandcamp.com/album/ceramic-bird">Ceramic Bird by Jeremiah Tabb</a>
        </iframe>
        <iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=1006305250/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/" seamless>
            <a href="http://jeremiahtabb.bandcamp.com/album/ocean-music">Ocean Music by Jeremiah Tabb</a>
        </iframe>
        <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/Yqy6TQVIaa8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
    </div>
</template>

<script>
export default {
    name: 'MusicPlayers'
}
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';
    .music-players {
        padding: $normal;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
</style>
