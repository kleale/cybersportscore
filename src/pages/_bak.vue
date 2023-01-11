<script setup lang="ts">
  import StreamBlock from '../components/match/StreamBlock.vue'
  import { ref, watch, computed } from 'vue';

  //const match_id = ref(this.$route.params.match_id)
  const match_id = ref("match_id")
  const toggle = ref(false)
  const array = ref([1, 2, 3])
  const writeData = (e: any) => {
    match_id.value = e.target.value
  }
  watch(match_id, (next, prev) => {
    console.log(next, prev)
  })

  const dataComp = computed(() => {
    return match_id.value
  })
</script>

<template>
  <StreamBlock :data="match_id" />

  <div>Match id: {{ match_id }}</div>
  <button @click="toggle = !toggle">toggle</button>
  <div v-show="toggle">123</div>
  <div v-for="data of array">{{ data }}</div>

  <div :about="match_id">match_id</div>
  <!-- bind переменной в атрибут -->

  <input @input="writeData" :value="match_id">
</template>

<style scoped>

</style>
