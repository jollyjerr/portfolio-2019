<template>
    <div class="portfolio" >
        <div v-for="project in projects" :key="project.id" class="portfolio-project-listing">
            <ProjectListing :project="project" />
        </div>
    </div>
</template>

<script>
import ProjectListing from '@/components/ProjectListing.vue'
export default {
    name: 'Portfolio',
    components: {
        ProjectListing
    },
    props: {
        projects: Array
    }
}
</script>


<style lang="scss" scoped>
    @import '../assets/variables.scss';
    .portfolio {
        padding: $normal;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .portfolio-project-listing {
            width: 48%;
            padding: 1%;
            @media only screen and (max-width: 600px) {
                width: 100%
            }
        }
    }
</style>
