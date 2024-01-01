<template>
<div :dir="direction" class="overflow-x-auto">
    <!-- Your main app content -->
    <div class="absolute z-10 m-4">
        <button @click="toggleLanguage" id="theme-toggle" type="button" class="text-gray-500  rounded-lg text-sm p-2.5">
            <span id="Ar" class="hidden w-5 h-5 font-extrabold text-xl " >
              Ar
            </span>
            <span id="En" class="hidden w-5 h-5 font-extrabold text-xl " >
              En
            </span>
        </button>
    </div>
    <RouterView />
</div>
</template>
<script>
export default {
    data() {
        return {
            direction: 'rtl' // or 'ltr' based on the language
        };
    },
   mounted() {
    // Check if language preference is stored in local storage
    const storedLang = localStorage.getItem('lang');
    if (storedLang) {
        this.$i18n.locale = storedLang;
        this.direction = storedLang === 'ar' ? 'rtl' : 'ltr';

        // Display the appropriate icon based on the stored language
        var themeToggleLightIcon = document.getElementById('En');
        var themeToggleDarkIcon = document.getElementById('Ar');

        if (storedLang === 'ar') {
            themeToggleDarkIcon.classList.remove('hidden');
            themeToggleLightIcon.classList.add('hidden');
        } else {
            themeToggleDarkIcon.classList.add('hidden');
            themeToggleLightIcon.classList.remove('hidden');
        }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // If no stored preference, use system default dark mode preference
        this.$i18n.locale = 'ar';
        this.direction = 'rtl';
    } else {
        this.$i18n.locale = 'en';
        this.direction = 'ltr';
    }
},

    methods: {
        toggleLanguage() {
            var themeToggleDarkIcon = document.getElementById('Ar');
            var themeToggleLightIcon = document.getElementById('En');

            if (this.$i18n.locale === 'ar') {
                themeToggleLightIcon.classList.remove('hidden');
                themeToggleDarkIcon.classList.add('hidden');
                localStorage.setItem('lang', 'en');
            } else {
                themeToggleDarkIcon.classList.remove('hidden');
                themeToggleLightIcon.classList.add('hidden');
                localStorage.setItem('lang', 'ar');
            }

            // Toggle between 'en' and 'ar'
            this.$i18n.locale = this.$i18n.locale === 'en' ? 'ar' : 'en';

            // Update the direction based on the selected language
            this.direction = this.$i18n.locale === 'ar' ? 'rtl' : 'ltr';
        }
    }
}
</script>


<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
*{
  font-weight: 700;
}
td{
    height: 100%;
    padding: 0;
}
</style>
