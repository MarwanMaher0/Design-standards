<template>
  <div class="overflow-x-auto">
    <div class="text-4xl py-4 text-wrap text-center">

      <p>
        {{ $t(" The Design Matrix of Resilient Design Criteria and Requirements in Different Educational and Servant Spaces:") }}
      </p>
    </div>

    <tabelHeder />
    <External />
    <tabelHeder />

    <Internal />
    <tabelHeder />

    <stairs />
    <tabelHeder />

    <Other />
    <tabelHederAll />

    <Fsooter />
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch ,onUpdated} from "vue";
onUpdated(() => {
  // text content should be the same as current `count.value`
})
import tabelHeder from "../components/TabelHeder.vue";
import tabelHederAll from "../components/TabelHederAll.vue";
import External from "../contaners/External.vue";
import Internal from "../contaners/Internal.vue";
import stairs from "../contaners/stairs.vue";
import Other from "../contaners/Other.vue";
import Fsooter from "../contaners/footer.vue";
</script>

<style lang="scss" scoped></style>
