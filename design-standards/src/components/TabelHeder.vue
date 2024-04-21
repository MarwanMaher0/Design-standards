<template>
  <div class="">
    <table class=" max-lg:min-w-[900px] overflow-x-auto">
      <tr>
        <td class="bg-[#2f5496] text-2xl text-gray-100" rowspan="3" colspan="8">
          {{
            $t(
              " Design, Environmental Criteria, and Precautionary Measures for Different Educational and Servant Spaces  "
            )
          }}
        </td>
        <td class="bg-[#2f5496] w-20 text-gray-100" rowspan="3" colspan="1">
          <div class="-rotate-90">{{ $t(" Icons ") }}</div>
        </td>
        <td class="bg-[#2f5496] w-96 text-gray-100" rowspan="1" colspan="4">
          {{ $t(" Resilient Design Criteria and Requirements ") }}
        </td>
        <td class="bg-[#2f5496] w-36 text-gray-100" rowspan="3" colspan="1">
          <div class="-rotate-90">
            {{ $t(" Weight of different Criteria ") }}
          </div>
        </td>
      </tr>
      <tr>
        <td
          class="bg-[#2f5496] w-24   h-32 text-gray-100"
          rowspan="2"
          colspan="1"
        >
          <div class="-rotate-90">
            {{ $t(" Epidemics Confronting ") }}
          </div>
        </td>
        <td class="bg-[#2f5496] w-24   text-gray-100" rowspan="2" colspan="1">
          <div class="-rotate-90">
            {{ $t(" Adapting to climate conditions ") }}
          </div>
        </td>
        <td class="bg-[#2f5496] w-24   text-gray-100" rowspan="2" colspan="1">
          <div class="-rotate-90">
            {{ $t(" Technological development  ") }}
          </div>
        </td>
        <td class="bg-[#2f5496] w-24   text-gray-100" rowspan="2" colspan="1">
          <div class="-rotate-90">
            {{ $t(" Enhance Educational facilities ") }}
          </div>
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
  /* padding: 8px; */
  border: 1px solid #000000;
  /* color: #FFFFFF; */
  font-weight: bold;
}

table td {
  /* padding: 8px; */
  border: 1px solid #000000;
}

table tr {
  --tw-bg-opacity: 1;
  /* background-color: rgb(229 231 235 / var(--tw-bg-opacity)); */

  color: #000000;
}

table .mobile-head {
  display: none;
}

table .show-on-mobile {
  display: none;
}
</style>
