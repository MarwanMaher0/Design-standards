<template>
  <div class="w-full cover-gradient-2 h-full">
    <section id="hero" class="w-full">
      <div class="grid grid-cols-7 items-center">
        <div class=""></div>
        <div
          class="flex flex-col gap-4 col-span-5 sm:col-span-3 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left"
        >
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            :class="{ 'text-left': direction === 'ltr', 'text-right': direction === 'rtl' }"

            class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize "
          >

          {{ $t("Resilience") }}
            <span class="text-header-gradient">
              {{ $t("scale for") }}
            </span>
            {{ $t("schools") }}
          </h1>
          <p
          :class="{ 'text-left': direction === 'ltr', 'text-right': direction === 'rtl' }"
          >
            {{ $t(
              "This application provides a design matrix to measure the resilience of schools and their different educational spaces during crises. The methodology of this application is based on analyzing the resilient design criteria, which include: 1- Epidemic Prevention; 2- Climate Change Adaptation; 3- Integration of Technological Advancements; and 4- Supporting Advanced Education, according to the design, environmental criteria, and precautionary measures followed in different educational spaces identified by previous research that was published and indexed in the journals PubMed, SCI, and Scopus. The educational spaces have been divided into 1) external educational spaces (layout); 2) internal educational spaces (classroom); 3) residential educational spaces that meet the requirements of hybrid and distance learning during crises and avoid school closure; and 4) Servant spaces for passing between these spaces, such as stairs and corridors. Finally, the application provides a comprehensive evaluation of resilience, recommendations, and guidelines for users to enhance and increase resilience in the school to be more adaptive and resilient during crises to avoid closure."
              ) }}<br />   
              <br />      
     
          {{ $t("Provided by") }}<br />
          {{ $t("Teacher Assistant, Omar Mohamed Atef, Architectural Engineering Department, El Minya High Institute for Engineering and Technology, Egypt") }}<br />
          {{ $t("Professor, Khaled Mohamed Dewidar, Architectural Engineering Department, Faculty of Engineering, Ain Shams University, Egypt") }}<br />
          {{ $t("Professor, Gehan Ahmed Nagy, Architectural Engineering Department, Faculty of Engineering, the British University in Egypt") }}<br />

          </p>
          <div
            class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
          >
          <input
            v-model="schoolName"
            placeholder="your school name"
            class="max-w-full rounded-xl px-4 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center"
          />
          <ChevronDownIcon :size="20" class="mt-1 text-[#0c66ee]" />

            <button
              class="max-w-full rounded-3xl px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white"
              @click="saveText"
              >
              {{ $t("Get Started") }}
              
            </button>
          </div>
        </div>
        <div class="w-full col-span-2 hidden sm:block">
          <img
            class="w-full h-full"
            :src="require('../assets/Teaching-amico.png')"
            alt=""
          />
        </div>
      </div>
      <div class=" grid grid-cols-2 pb-[10rem] pt-[4rem]">
        <div class=""></div>
        <div class=" text-center gap-5 grid grid-rows justify-center content-center">
          <div class="text-xl">
          {{ $t("Scan Qr Code") }}
            
            </div>
          <div class="flex justify-center " ><img
            :class="{ 'w-full': direction === 'ltr', 'w-8/12': direction === 'rtl' }"
            
            class="  h-[10rem] " src="../assets/frame.png" alt="Qr Code "></div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const schoolName = ref("");
const direction = ref(localStorage.getItem('lang') === 'ar' ? 'rtl' : 'ltr');
watch(() => {
  const storedLang = localStorage.getItem("lang");
  direction.value = storedLang === "ar" ? "rtl" : "ltr";
});

const saveText = () => {
  if (schoolName.value === "") {
    localStorage.setItem("schoolName", "school Name");
  } else {
    localStorage.setItem("schoolName", schoolName.value);
  }
  router.push({ name: "ConExternalv" });
};
</script>

<style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(
    169.4deg,
    #3984f4 -6.01%,
    #0cd3ff 36.87%,
    #2f7cf0 78.04%,
    #0e65e8 103.77%
  );
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
  background: linear-gradient(
    169.4deg,
    rgba(57, 132, 244, 0.1) -6.01%,
    rgba(12, 211, 255, 0.1) 36.87%,
    rgba(47, 124, 240, 0.1) 78.04%,
    rgba(14, 101, 232, 0.1) 103.77%
  );
}

.max-h-0 {
  max-height: 0;
}

.text-gradient {
  color: linear-gradient(136.91deg, #468ef9 -12.5%, #0c66ee 107.5%);
}
</style>
