<template>
  <div>
    {{ $t('cart') }} <!-- This will display "سله" when the active language is set to Arabic -->
  </div>
</template>


<script>
export default {
  mounted() {
    console.log(this.$t('cart')); // Outputs the translated text for 'hello'
  }
}
</script>
