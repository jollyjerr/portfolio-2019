<template>
    <div class="portfolio" >
        <ul class="projects" >
            <div v-for="project in projects" :key="project.id" >
                <ProjectListing :project="project" />
            </div>
        </ul>
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
    }
</style>
