<template>
    <div class="CON border-8 border-black">
        <tabelHeder />
        <External />

       

    </div>
</template>

<script setup>
import tabelHeder from "../components/TabelHeder.vue";
import  External  from "../contaners/External.vue";



</script>

<style >

@media (max-width: 768px) {
    .CON {
        display: block;
      
        overflow-x: hidden;

    }    img{
    width: 30px;
    height: 30px;
}

}
</style>