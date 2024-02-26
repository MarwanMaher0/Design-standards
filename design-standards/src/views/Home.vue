<template>
  <div class="w-full cover-gradient-2 h-dvh">
    <section id="hero" class="w-full ">
      <div class="grid grid-cols-7   items-center">
        <div class=""></div>
        <div
          class="flex flex-col gap-4 col-span-5 sm:col-span-3 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">

          <h1 data-aos="fade-right" data-aos-once="true"
            class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10">
            The World's
            <span class="text-header-gradient">Fastest Growing</span> Crypto Web
            App
          </h1>
          <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="paragraph hidden sm:block">
            Buy and sell 200+ cryptocurrencies with 20+ flat currencies using
            bank transfers or your credit/debit card.
          </p>
          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
            <button
      class="max-w-full rounded-3xl px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white"
      @click="saveText"
    >
      Get Started
    </button>
    <ChevronDownIcon :size="20" class="mt-1 text-[#0c66ee]" />
    <input
      v-model="schoolName"
      placeholder="your school name"
      class="max-w-full rounded-xl px-4 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center"
    />
  

          </div>
        </div>
        <div class="w-full col-span-2  hidden sm:block">
          <img class="w-full h-full " :src="require('../assets/Teaching-amico.png')" alt="" />
        </div>

      </div>
      <div class=""></div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const schoolName = ref('');

const saveText = () => {
  if (schoolName.value === "") {
    localStorage.setItem('schoolName', "school Name");

  } else {
    
    localStorage.setItem('schoolName', schoolName.value);
  }
};
</script>

<style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg,
      #3984f4 -6.01%,
      #0cd3ff 36.87%,
      #2f7cf0 78.04%,
      #0e65e8 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bg-partner {
  background: url("../assets/img/partner/background.png");
  background-size: cover;
  background-position: center;
}

.bg-trading-tools {
  background: url("../assets/img/bg-trading-tools.webp");
  background-size: cover;
  background-position: center;
}

.cover-gradient-2 {
  background: linear-gradient(169.4deg,
      rgba(57, 132, 244, 0.1) -6.01%,
      rgba(12, 211, 255, 0.1) 36.87%,
      rgba(47, 124, 240, 0.1) 78.04%,
      rgba(14, 101, 232, 0.1) 103.77%);
}

.max-h-0 {
  max-height: 0;
}

.text-gradient {
  color: linear-gradient(136.91deg, #468ef9 -12.5%, #0c66ee 107.5%);
}
</style>
