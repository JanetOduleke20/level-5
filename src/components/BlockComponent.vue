<template>
  <div class="bg-success px-5 py-5 text-light mx-auto" v-if="showBlock" @click="stopTimer">Block</div>
</template>

<script>
export default {
    props: ['divDelay'],
    data() {
        return {
            showBlock: false,
            reactionTime: 0,
            timer: null
        }
    },
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.reactionTime += 2;
            }, 2);
        },
        stopTimer() {
            clearInterval(this.timer);
            this.$emit('result', this.reactionTime);
        }
    },
    mounted() {
        setTimeout(() => {
            this.showBlock = true;
        }, this.divDelay);
        this.startTimer();
    }

}
</script>

<style>

</style>