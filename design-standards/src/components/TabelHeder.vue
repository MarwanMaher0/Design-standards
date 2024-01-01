<template>
<div class="">
    <table>
        <tr>
            <td class="bg-[#2f5496] text-xl text-gray-100"  rowspan='3' colspan='8'><span class='mobile-head '></span>{{ $t('Design, Environmental Criteria, and Precautionary Measures for Different Educational Spaces ') }} </td>
            <td class="bg-[#2f5496] text-gray-100" rowspan='3' colspan='1'><span class='-rotate-90'>{{ $t('Icons ') }}</span> </td>
            <td class="bg-[#2f5496] text-gray-100" rowspan='1' colspan='4'><span class='mobile-head'></span>{{ $t('Resilient Design Criteria and Requirements ') }} </td>
            <td class="bg-[#2f5496] text-gray-100" rowspan='3' colspan='1'><span class='mobile-head'>4</span>{{ $t('Weight of Design Criteria ') }} </td>
        </tr>
        <tr>
            <td class="bg-[#2f5496] text-gray-100" rowspan='2' colspan='1'><span class='mobile-head'></span>{{ $t('Epidemics ') }} </td>
            <td class="bg-[#2f5496] text-gray-100" rowspan='2' colspan='1'><span class='mobile-head'></span>{{ $t('Climate Change ') }} </td>
            <td class="bg-[#2f5496] text-gray-100" rowspan='2' colspan='1'><span class='mobile-head'>2</span>{{ $t('Advanced Technology ') }} </td>
            <td class="bg-[#2f5496] text-gray-100" rowspan='2' colspan='1'><span class='mobile-head'>3</span>{{ $t('Advanced Education ') }} </td>
        </tr>

    </table>
</div>

</template>

<script setup>

</script>

<style>
table {
    border: 1px solid #000000;
    border-collapse: collapse;
    margin: 0 auto;
    padding: 0px;
    table-layout: fixed;
    min-width: 100%;
}

table th {
    text-align: center;
    /* padding: 8px; */
    border: 1px solid #000000;
    /* color: #FFFFFF; */
    font-weight: bold;
    text-align: center
}

table td {
    /* padding: 8px; */
    border: 1px solid #000000;
}

table tr {
    --tw-bg-opacity: 1;
    /* background-color: rgb(229 231 235 / var(--tw-bg-opacity)); */

    color: #000000;
    text-align: center;
}

table .mobile-head {
    display: none;
}

table .show-on-mobile {
    display: none;
}
/*
@media screen and (max-width: 600px) {
    table {
        border: 1px solid #000000;
        border-collapse: collapse;
        margin: 0 auto;
        padding: 0px;
        table-layout: fixed;
        min-width: 100%;
    }

    table td {
        padding: 8px;
        border: 1px solid #000000;
        display: block;
        text-align: right;
        width: 100%\9;
        float: left\9;
    }

    table tr {
        background-color: #dddddd;
        color: #000000;
        text-align: right;
        margin: 8px
    }

    table tr:first-child {
        display: none;
    }

    table tr {
        display: block;
    }

    table td:not(:first-child) {
        border-top: 0px;
    }

    table .mobile-head {
        font-weight: bold;
        color: #000000;
        float: left;
        text-align: left;
        display: block
    }

    table .show-on-mobile {
        display: block;
    }
} */
</style>
