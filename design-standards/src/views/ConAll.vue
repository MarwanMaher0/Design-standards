<template>
  <div class="border-8 border-black  overflow-x-auto">
    <tabelHeder />
    <External />
    <Internal />
    <stairs />
    <Other />
    <Fsooter />
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch ,onUpdated} from "vue";
onUpdated(() => {
  // text content should be the same as current `count.value`
})
import tabelHeder from "../components/TabelHeder.vue";
import External from "../contaners/External.vue";
import Internal from "../contaners/Internal.vue";
import stairs from "../contaners/stairs.vue";
import Other from "../contaners/Other.vue";
import Fsooter from "../contaners/footer.vue";
</script>

<style lang="scss" scoped></style>
