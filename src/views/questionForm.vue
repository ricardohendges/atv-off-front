<template>
    <formsTemplate>
        questões!
        {{params}}
    </formsTemplate>
</template>

<script>
import formsTemplate from '../components/template/formsTemplate.vue'
export default {
    components: {
        formsTemplate
    },  
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