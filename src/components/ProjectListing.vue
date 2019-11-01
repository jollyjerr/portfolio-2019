<template>
    <div class="project-listing" >
        <a :href="project.link" target="_blank" rel="noopener noreferrer">
            <h2>{{project.name}}</h2>
        </a>
        <img :src="project.image" :alt="project.name">
        <p>{{project.description}}</p>
    </div>
</template>

<script>
export default {
    props: {
        project: Object
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';
.project-listing {
    width: 100%;
    padding: 2%;
    // border: 1px solid $important;
    h2 {
        color: $text;
    }
    a {
        text-decoration: none;
    }
    img {
        width: 100%;
    }
}
</style>