<template>
  <showMessage/>
  <router-view></router-view>
</template>

<script>
import showMessage from './components/showMessage.vue'
export default {
    components: { showMessage }
}
</script>