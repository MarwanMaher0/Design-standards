<template>
  <div class="border-8 border-black overflow-x-auto">
    <tabelHeder />
    <External />
  </div>
</template>

<script setup>
import tabelHeder from "../components/TabelHeder.vue";
import External from "../contaners/External.vue";
</script>

<style>
@media (max-width: 768px) {
  .CON {
    overflow-x: hidden;
  }
}
</style>
