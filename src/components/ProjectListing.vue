<template>
    <div class="project-listing" >
        <h3>{{project.name}}</h3>
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
</style>