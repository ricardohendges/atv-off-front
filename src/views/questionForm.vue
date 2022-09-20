<template>
    questões!
    {{params}}
</template>

<script>
export default {
    data() {
        return {
            params: null
        }
    },
    mounted() {
        console.log('mounted!!!')
        this.params = this.$route.params
    },
}
</script>