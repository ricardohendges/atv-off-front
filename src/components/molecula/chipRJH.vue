<template>
    <v-chip class="ma-2" :color="getColor()" text-color="white">
        {{status ? status : '--'}}
    </v-chip>
</template>

<script>
export default {
    props: {
        status: null
    },
    data() {
        return {
            listStatus: [
                {status: '- in queue -', color:'black'},
                {status: 'Wrong answer', color:'red'},
                {status: 'Accepted', color:'green'},
                {status: 'Presentation error', color:'brown'},
                {status: 'Runtime error', color:'blue'},
                {status: 'Time limit exceeded', color:'grey'},
            ]
        }
    },
    methods: {
        getColor() {
            return this.listStatus.find(a=> a.status == this.status)?.color;
        }
    }
}
</script>