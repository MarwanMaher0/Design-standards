<template>
  <div class="  overflow-x-auto">
    <div class="text-4xl py-4 text-wrap text-center">

      <p>
        {{ $t(" The Design Matrix of Resilient Design Criteria and Requirements in Different Educational Spaces:") }}
      </p>
    </div>
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
