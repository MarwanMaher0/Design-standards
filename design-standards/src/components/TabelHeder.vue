<template>
  <div class="">
    <table class="min-x-[1000px] max-lg:w-[900px] overflow-x-auto">

      <tr>
        <td class="bg-[#2f5496] text-xl text-gray-100" rowspan="3" colspan="8">
          {{
            $t(
              "Design, Environmental Criteria, and Precautionary Measures for Different Educational Spaces "
            )
          }}
        </td>
        <td class="bg-[#2f5496] text-gray-100" rowspan="3" colspan="1">
          <span class="-rotate-90">{{ $t("Icons ") }}</span>
        </td>
        <td class="bg-[#2f5496] text-gray-100" rowspan="1" colspan="4">
          {{ $t("Resilient Design Criteria and Requirements ") }}
        </td>
        <td class="bg-[#2f5496] text-gray-100" rowspan="3" colspan="1">
         {{ $t("Weight of Design Criteria ") }}
        </td>
      </tr>
      <tr>
        <td class="bg-[#2f5496] text-gray-100" rowspan="2" colspan="1">
          {{ $t("Epidemics ") }}
        </td>
        <td class="bg-[#2f5496] text-gray-100" rowspan="2" colspan="1">
          {{ $t("Climate Change ") }}
        </td>
        <td class="bg-[#2f5496] text-gray-100" rowspan="2" colspan="1">
          {{ $t("Advanced Technology ") }}
        </td>
        <td class="bg-[#2f5496] text-gray-100" rowspan="2" colspan="1">
          {{ $t("Advanced Education ") }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup></script>

<style>
table {
  border: 1px solid #000000;
  /* border-collapse: collapse; */
  /* margin: 0 auto; */
  padding: 0px;
  table-layout: fixed;
}

table th {
  text-align: center;
  /* padding: 8px; */
  border: 1px solid #000000;
  /* color: #FFFFFF; */
  font-weight: bold;
  text-align: center;
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
</style>
