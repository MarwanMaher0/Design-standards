<template>
<div class="">
    <nav class="bg-gray-100 w-full   border-gray-200 dark:bg-gray-900">
        <div class=" shadow-xl flex  flex-wrap items-center justify-between mx-auto pr p-4">
            <div class="">
                <!-- <button @click="toggleLanguage">Toggle Language</button> -->

            </div>
    
            <div class="hidden w-ful pr-10  md:block pt-1 pb-4 md:w-auto" id="navbar-default">
                <ul class="font-medium flex flex-col  p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <router-link :to="{ name: 'ConExternalv' }" class="block py-2 px-3  bg-blue-700 rounded md:bg-transparent  md:hover:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">External</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'ConInternal' }" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Internal</router-link>
                    </li>

                    <li>
                        <router-link :to="{ name: 'ConStairs' }" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">stairs</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'ConOther' }" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Other</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'ConAll' }" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">AllOfThem</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
</template>

<script setup>


</script>

<style lang="scss" scoped>

</style>
