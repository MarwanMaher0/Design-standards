<template>
  <div class="   overflow-x-auto">
    <div class="text-4xl py-4 text-nowrap text-center">

      <p>
        {{ $t(" The Design Matrix of Resilient Design Criteria and Requirements in Different Educational Spaces:") }}
      </p>
    </div>
    <tabelHeder />
    <Internal />
  </div>
</template>

<script setup>
import tabelHeder from "../components/TabelHeder.vue";
import Internal from "../contaners/Internal.vue";
</script>

<style lang="scss" scoped></style>
