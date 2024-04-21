<template>
  <div class="">

    <table class=" max-lg:min-w-[900px]  overflow-x-auto">
      <tr id="Ext-row-1 ">
        <td class="bg-[#2f5496] pt-[500px] text-gray-100" rowspan="48" colspan="1">

            <p class=" text-6xl text-nowrap  -rotate-90 ">
              {{ $t(" External Spaces (Layout) ") }}
            </p>
          <div class="hidden">/</div>
        </td>
        <td rowspan="42" class="pt-[500px]" colspan="2">
          <p class=" text-5xl text-nowrap  -rotate-90 ">

            {{ $t(" Design Criteria for Layout ") }}
          </p>

        </td>
        <div class="hidden">/</div>

        <td rowspan="13" colspan="1">
          {{ $t(" Site Slection (Safety and Security Requirements)") }}
        </td>
        <div class="hidden">/</div>

        <td rowspan="3" colspan="1">
          {{ $t(" Fire Protection ") }}
        </td>
        <div class="hidden">/</div>

        <td rowspan="3" colspan="2">
          {{ $t(" Keep away from fire resources that result in harmful emissions to the environment and health, such as ") }}
        </td>
        <div class="hidden">/</div>
        <div class="hidden">(</div>
        <td>{{ $t(" Gas Stations ") }}</td>
        <div class="hidden">)</div>


        <td class="w-20">
          <img src="../assets/2 (1).png" class="mx-auto" alt="" />
        </td>
        <td class="w-24 bg-red-300">
          <input type="checkbox" id="External-row-1" name="ahosting" value="1" class="hidden peer" required />
          <label for="External-row-1"
            class="inline-flex text-center w-full items-center justify-center h-full py-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
           <svgGlobal/>
          </label>
        </td>
        <td class="w-24 bg-yellow-200">
          <input type="checkbox" id="External-row-1" name="ahosting" value="1" class="hidden peer" required
            ref="checkboxRef" />
          <label for="External-row-1"
            class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-yellow-200 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 show-svg">
           <svgGlobal/>
          </label>
        </td>
        <td class="w-24 bg-white">
          <input disabled type="checkbox" id="External-row-1" name="ahosting" value="" class="hidden" required />
          <label for="External-row-1"
            class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="w-24 bg-white">
          <input type="checkbox" id="External-row-1" name="ahosting" value="1" class="hidden peer" required />
          <label for="External-row-1"
            class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
           <svgGlobal/>
          </label>
          <div class="hidden">/</div>
        </td>
        <td class="w-36">75%</td>
      </tr>
      <tr id="Ext-row-2">
        <div class="hidden">

          <td rowspan="13" colspan="1">
            {{ $t(" Site Slection (Safety and Security Requirements)") }}
          </td>
          /

          <td rowspan="3" colspan="1">
            {{ $t(" Fire Protection ") }}
          </td>
          <div class="hidden">/</div>

          <td rowspan="3" colspan="2">
            {{ $t(" :Keep away Fire Resources, such as ") }}
          </td>
        </div>
        <div class="hidden">/</div>
        <td>{{ $t(" Forests ") }}</td>
        <td class="bg-white">
          <img src="../assets/2 (1).jpg" class="mx-auto" alt="" />
        </td>
        <td class="bg-red-300">
          <input type="checkbox" id="External-row-2" name="ahosting" value="1" class="hidden peer" required />
          <label for="External-row-2"
            class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
           <svgGlobal/>
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="External-row-2" name="ahosting" value="1" class="hidden peer" required />
          <label for="External-row-2"
            class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
           <svgGlobal/>
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="External-row-2" name="ahosting" value="" class="hidden" required />
          <label for="External-row-2"
            class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="External-row-2" name="ahosting" value="1" class="hidden peer" required />
          <label for="External-row-2"
            class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
           <svgGlobal/>
          </label>
          <div class="hidden">/</div>
        </td>
        <td>75%</td>
      </tr>
      <tr id="Ext-row-3">
        <div class="hidden">
          <td rowspan="13" colspan="1">
            {{ $t(" Site Slection (Safety and Security Requirements)") }}
          </td>
          /

          <td rowspan="3" colspan="1">
            {{ $t(" Fire Protection ") }}
          </td>
          <div class="hidden">/</div>

          <td rowspan="3" colspan="2">
            {{ $t(" :Keep away Fire Resources, such as ") }}
          </td>
          <div class="hidden">/</div>

        </div>
        <td>{{ $t(" Burning kilns ") }}</td>
        <td class="bg-white">
          <img src="../assets/Picture1.png" class="mx-auto" alt="" />
        </td>
        <td class="bg-red-300">
          <input type="checkbox" id="External-row-3" name="ahosting" value="1" class="hidden peer" required />
          <label for="External-row-3"
            class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
           <svgGlobal/>
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="External-row-3" name="ahosting" value="1" class="hidden peer" required />
          <label for="External-row-3"
            class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
           <svgGlobal/>
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="External-row-3" name="ahosting" value="" class="hidden" required />
          <label for="External-row-3"
            class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="External-row-3" name="ahosting" value="1" class="hidden peer" required />
          <label for="External-row-3"
            class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
           <svgGlobal/>
          </label>
          <div class="hidden">/</div>
        </td>
        <td>75%</td>
      </tr>
      <tr id="Ext-row-4">
        <div class="hidden">
          <td rowspan="13" colspan="1">
            {{ $t(" Site Slection (Safety and Security Requirements)") }}
          </td>



          <div class="hidden">/</div>


        </div>
        <td rowspan="4" colspan="1">
          {{ $t(" Protection from environmental pollution (noise and visual) that results in harmful emissions to the environment and health, such as ") }}
        </td>
        <div class="hidden">/</div>

        <td rowspan="1" colspan="3">
          {{ $t(" Cement Factories ") }}
        </td>
        <td class="bg-white">
          <img src="../assets/2 (2).jpg" class="mx-auto" alt="" />
        </td>
        <td class="bg-red-300">
          <input type="checkbox" id="External-row-4" name="ahosting" value="1" class="hidden peer" required />
          <label for="External-row-4"
            class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
           <svgGlobal/>
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="External-row-4" name="ahosting" value="1" class="hidden peer" required />
          <label for="External-row-4"
            class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
           <svgGlobal/>
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="External-row-4" name="ahosting" value="" class="hidden" required />
          <label for="External-row-4"
            class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="External-row-4" name="ahosting" value="1" class="hidden peer" required />
          <label for="External-row-4"
            class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
           <svgGlobal/>
          </label>
          <div class="hidden">/</div>
        </td>
        <td>75%</td>
      </tr>
      <tr id="Ext-row-5">
        <div class="hidden">

          <td rowspan="13" colspan="1">
            {{ $t(" Site Slection (Safety and Security Requirements)") }}
          </td>


          <div class="hidden">/</div>


          <td rowspan="4" colspan="1">
            {{ $t(" Protection from Environmental Pollution (Sound-Visual) ") }}
          </td>
          <div class="hidden">/</div>
        </div>
        <td rowspan="1" colspan="3">
          {{ $t(" Petroleum Products Factories ") }}
        </td>

        <td class="bg-white">
          <img src="../assets/Picture3.png" class="mx-auto" alt="" />
        </td>
        <td class="bg-red-300">
          <input type="checkbox" id="External-row-5" name="ahosting" value="1" class="hidden peer" required />
          <label for="External-row-5"
            class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
           <svgGlobal/>
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="External-row-5" name="ahosting" value="1" class="hidden peer" required />
          <label for="External-row-5"
            class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
           <svgGlobal/>
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="External-row-5" name="ahosting" value="" class="hidden" required />
          <label for="External-row-5"
            class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="External-row-5" name="ahosting" value="1" class="hidden peer" required />
          <label for="External-row-5"
            class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
           <svgGlobal/>
          </label>
          <div class="hidden">/</div>
        </td>
        <td>75%</td>
      </tr>
      <tr id="Ext-row-6">
        <div class="hidden">
          <td rowspan="13" colspan="1">
            {{ $t(" Site Slection (Safety and Security Requirements)") }}
          </td>



          <div class="hidden">/</div>


          <td rowspan="4" colspan="1">
            {{ $t(" Protection from Environmental Pollution (Sound-Visual) ") }}
          </td>
          <div class="hidden">/</div>
        </div>
        <td rowspan="1" colspan="3">
          {{ $t(" Quarries ") }}
        </td>

        <td class="bg-white">
          <img src="../assets/Picture4.jpg" class="mx-auto" alt="" />
        </td>
        <td class="bg-red-300">
          <input type="checkbox" id="External-row-6" name="ahosting" value="1" class="hidden peer" required />
          <label for="External-row-6"
            class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
           <svgGlobal/>
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="External-row-6" name="ahosting" value="1" class="hidden peer" required />
          <label for="External-row-6"
            class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
           <svgGlobal/>
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="External-row-6" name="ahosting" value="" class="hidden" required />
          <label for="External-row-6"
            class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="External-row-6" name="ahosting" value="1" class="hidden peer" required />
          <label for="External-row-6"
            class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
           <svgGlobal/>
          </label>
          <div class="hidden">/</div>
        </td>
        <td>75%</td>
      </tr>
      <tr id="Ext-row-7">
        <div class="hidden">
          <td rowspan="13" colspan="1">
            {{ $t(" Site Slection (Safety and Security Requirements)") }}
          </td>



          <div class="hidden">/</div>


          <td rowspan="4" colspan="1">
            {{ $t(" Protection from Environmental Pollution (Sound-Visual) ") }}
          </td>
          <div class="hidden">/</div>
        </div>
        <td rowspan="1" colspan="3">
          {{ $t(" Cemeteries ") }}
        </td>

        <td class="bg-white">
          <img src="../assets/Picture5.jpg" class="mx-auto" alt="" />
        </td>
        <td class="bg-red-300">
          <input type="checkbox" id="External-row-7" name="ahosting" value="1" class="hidden peer" required />
          <label for="External-row-7"
            class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
           <svgGlobal/>
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="External-row-7" name="ahosting" value="1" class="hidden peer" required />
          <label for="External-row-7"
            class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
           <svgGlobal/>
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="External-row-7" name="ahosting" value="" class="hidden" required />
          <label for="External-row-7"
            class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="External-row-7" name="ahosting" value="1" class="hidden peer" required />
          <label for="External-row-7"
            class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
           <svgGlobal/>
          </label>
          <div class="hidden">/</div>
        </td>
        <td>75%</td>
      </tr>
      <tr id="Ext-row-8">
        <td rowspan="6" colspan="1">
          <div class="hidden">
        <td rowspan="13" colspan="1">
          {{ $t(" Site Slection (Safety and Security Requirements)") }}
        </td>



        <div class="hidden">/</div>



  </div>
  {{ $t(" Access to the site ") }}
  </td>
  <div class="hidden">/</div>

  <td rowspan="3" colspan="2">
    {{ $t(" :keep away obstacles or barriers, such as ") }}
  </td>
  <div class="hidden">/</div>


  <td>{{ $t(" Railway lines ") }}</td>
  <td class="bg-white">
    <img src="../assets/Picture6.png" class="mx-auto" alt="" />
  </td>
  <td class="">
    <input type="checkbox" id="External-row-8" name="ahosting" value="" class="hidden peer" required />
    <label for="External-row-8"
      class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-red- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[# peer-checked:border-[# peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
    </label>
  </td>
  <td class="bg-white">
    <input type="checkbox" id="External-row-8" name="ahosting" value="" class="hidden" required />
    <label for="External-row-8"
      class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
    </label>
  </td>
  <td class="bg-white">
    <input disabled type="checkbox" id="External-row-8" name="ahosting" value="" class="hidden" required />
    <label for="External-row-8"
      class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
    </label>
  </td>
  <td class="bg-white">
    <input type="checkbox" id="External-row-8" name="ahosting" value="1" class="hidden peer" required />
    <label for="External-row-8"
      class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
      </svg>
    </label>
    <div class="hidden">/</div>
  </td>
  <td>25%</td>
  </tr>
  <tr id="Ext-row-9">
    <div class="hidden">
      <td rowspan="13" colspan="1">
        {{ $t(" Site Slection (Safety and Security Requirements)") }}
      </td>
      <div class="hidden">/</div>
      {{ $t(" Access to the site ") }}
      <div class="hidden">/</div>

      <td rowspan="3" colspan="2">
        {{ $t(" :keep away obstacles or barriers, such as ") }}
      </td>
      <div class="hidden">/</div>
    </div>

    <td>
      {{ $t(" High voltage power lines ") }}
    </td>
    <td class="bg-white">
      <img src="../assets/Picture7.png" class="mx-auto" alt="" />
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-9" name="ahosting" value="0" class="hidden" required />
      <label for="External-row-9"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-9" name="ahosting" value="0" class="hidden" required />
      <label for="External-row-9"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input disabled type="checkbox" id="External-row-9" name="ahosting" value="0" class="hidden" required />
      <label for="External-row-9"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-9" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-9"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
      <div class="hidden">/</div>
    </td>
    <td>25%</td>
  </tr>
  <tr id="Ext-row-10">
    <div class="hidden">
      <td rowspan="13" colspan="1">
        {{ $t(" Site Slection (Safety and Security Requirements)") }}
      </td>
      <div class="hidden">/</div>
      {{ $t(" Access to the site ") }}
      <div class="hidden">/</div>

      <td rowspan="3" colspan="2">
        {{ $t(" :keep away obstacles or barriers, such as ") }}
      </td>
      <div class="hidden">/</div>
    </div>
    <td>{{ $t(" Rivers and Drains ") }}</td>
    <td class="bg-white">
      <img src="../assets/Picture8.jpg" class="mx-auto" alt="" />
    </td>
    <td class="bg-red-">
      <input type="checkbox" id="External-row-10" name="ahosting" value="" class="hidden " required />
      <label for="External-row-10"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-red- cursor-pointer dark:hover:text-gray- dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
       
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-10" name="ahosting" value="" class="hidden" required />
      <label for="External-row-10"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input disabled type="checkbox" id="External-row-10" name="ahosting" value="" class="hidden" required />
      <label for="External-row-10"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-green- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-10" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-10"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
      <div class="hidden">/</div>
    </td>
    <td>25%</td>
  </tr>
  <tr id="Ext-row-11">
    <div class="hidden">
      <td rowspan="13" colspan="1">
        {{ $t(" Site selection (safety and security requirements)") }}
      </td>
      <div class="hidden">/</div>
      {{ $t(" Access to the site ") }}
      <div class="hidden">/</div>


    </div>
    <td rowspan="1" colspan="2">
      {{ $t(" Roads ") }}
    </td>
    <div class="hidden">/</div>
    <td>
      {{ $t(" keep away from High Roads ") }}
    </td>
    <td class="bg-white">
      <img src="../assets/Picture9.jpg" class="mx-auto" alt="" />
    </td>
    <td class="bg-red-">
      <input type="checkbox" id="External-row-11" name="ahosting" value="" class="hidden" required />
      <label for="External-row-11"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-red- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-11" name="ahosting" value="0" class="hidden" required />
      <label for="External-row-11"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input disabled type="checkbox" id="External-row-11" name="ahosting" value="" class="hidden" required />
      <label for="External-row-11"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-green- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-11" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-11"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
      <div class="hidden">/</div>
    </td>
    <td>25%</td>
  </tr>
  <tr id="Ext-row-12">
    <div class="hidden">
      <td rowspan="13" colspan="1">
        {{ $t(" Site Slection (Safety and Security Requirements)") }}
      </td>
      <div class="hidden">/</div>
      {{ $t(" Access to the site ") }}
      <div class="hidden">/</div>
    </div>
    <td rowspan="2" colspan="2">
      {{ $t(" Entrances ") }}
    </td>
    <div class="hidden">/</div>
    <td>
      {{ $t(" Student Entrances From Side Roads (6m) ") }}
    </td>
    <td class="bg-white">
      <img src="../assets/Picture10.png" class="mx-auto" alt="" />
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-12" name="ahosting" value="0" class="hidden" required />
      <label for="External-row-12"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-12" name="ahosting" value="0" class="hidden" required />
      <label for="External-row-12"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input disabled type="checkbox" id="External-row-12" name="ahosting" value="" class="hidden" required />
      <label for="External-row-12"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-12" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-12"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
      <div class="hidden">/</div>
    </td>
    <td>25%</td>
  </tr>
  <tr id="Ext-row-13">
    <div class="hidden">
      <td rowspan="13" colspan="1">
        {{ $t(" Site Slection (Safety and Security Requirements)") }}
      </td>
      <div class="hidden">/</div>
      {{ $t(" Access to the site ") }}
      <div class="hidden">/</div>
      <td rowspan="2" colspan="2">
        {{ $t(" Entrances ") }}
      </td>
      <div class="hidden">/</div>
    </div>
    <td>
      {{ $t(" Perpendicular to The External Roads ") }}
    </td>
    <td class="bg-white">
      <img src="../assets/Picture10.png" class="mx-auto" alt="" />
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-13" name="ahosting" value="0" class="hidden" required />
      <label for="External-row-13"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-13" name="ahosting" value="0" class="hidden" required />
      <label for="External-row-13"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input disabled type="checkbox" id="External-row-13" name="ahosting" value="" class="hidden" required />
      <label for="External-row-13"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-13" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-13"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
      <div class="hidden">/</div>
    </td>
    <td>25%</td>
  </tr>
  <tr id="Ext-row-14">
    <td rowspan="1" colspan="11" class="h-4 bg-[#bfbfbf]"></td>
  </tr>
  <tr id="Ext-row-15">
    <td rowspan="16" colspan="1">
      {{ $t(" Requirements for Designing Outdoor Educational Spaces: ") }}
    </td>
    <div class="hidden">/</div>

    <td rowspan="6" colspan="1">
      {{ $t(" Floor ") }}
    </td>
    <div class="hidden">/</div>

    <td rowspan="3" colspan="1">
      {{ $t(" Industrial Materials ") }}
    </td>
    <div class="hidden">/</div>

    <td rowspan="1" colspan="2">
      {{ $t(" Stamped fair-faced concrete  ") }}
    </td>
    <td class="bg-white">
      <img src="../assets/Picture11.jpg" class="mx-auto" alt="" />
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-15" name="ahosting" value="0" class="hidden" required />
      <label for="External-row-15"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-15" name="ahosting" value="0" class="hidden" required />
      <label for="External-row-15"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input disabled type="checkbox" id="External-row-15" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-15"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-green-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-15" name="ahosting" value="0" class="hidden" required />
      <label for="External-row-15"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
      <div class="hidden">/</div>
    </td>
    <td>25%</td>
  </tr>
  <tr id="Ext-row-16">
    <div class="hidden">
      <td rowspan="16" colspan="1">
        {{ $t(" Requirements for Designing Outdoor Educational Spaces: ") }}
      </td>
      <div class="hidden">/</div>

      <td rowspan="6" colspan="1">
        {{ $t(" Floor ") }}
      </td>
      <div class="hidden">/</div>

      <td rowspan="3" colspan="1">
        {{ $t(" Industrial Materials ") }}
      </td>
      /
    </div>
    <td rowspan="1" colspan="2">
      {{ $t(" Artificial Grass ") }}
    </td>
    <td class="bg-white">
      <img src="../assets/Picture12.png" class="mx-auto" alt="" />
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-16" name="ahosting" value="0" class="hidden" required />
      <label for="External-row-16"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-16" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-16"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input disabled type="checkbox" id="External-row-16" name="ahosting" value="" class="hidden " required />
      <label for="External-row-16"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-green- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-16" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-16"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
      <div class="hidden">/</div>
    </td>
    <td>50%</td>
  </tr>
  <tr id="Ext-row-17">
    <div class="hidden">
      <td rowspan="16" colspan="1">
        {{ $t(" Requirements for Designing Outdoor Educational Spaces: ") }}
      </td>
      <div class="hidden">/</div>

      <td rowspan="6" colspan="1">
        {{ $t(" Floor ") }}
      </td>
      <div class="hidden">/</div>

      <td rowspan="3" colspan="1">
        {{ $t(" Industrial Materials ") }}
      </td>
      /
    </div>
    <td rowspan="1" colspan="2">
      {{ $t(" Tiling ") }}
    </td>
    <td class="bg-white">
      <img src="../assets/Picture13.png" class="mx-auto" alt="" />
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-17" name="ahosting" value="" class="hidden" required />
      <label for="External-row-17"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-17" name="ahosting" value="" class="hidden" required />
      <label for="External-row-17"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input disabled type="checkbox" id="External-row-17" name="ahosting" value="" class="hidden" required />
      <label for="External-row-17"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-17" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-17"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
      <div class="hidden">/</div>
    </td>
    <td>25%</td>
  </tr>
  <tr id="Ext-row-18">
    <div class="hidden">
      <td rowspan="16" colspan="1">
        {{ $t(" Requirements for Designing Outdoor Educational Spaces: ") }}
      </td>
      <div class="hidden">/</div>

      <td rowspan="6" colspan="1">
        {{ $t(" Floor ") }}
      </td>
      <div class="hidden">/</div>

      <td rowspan="3" colspan="1">
        {{ $t(" Industrial Materials ") }}
      </td>
      /
    </div>
    <td rowspan="3" colspan="1">
      {{ $t(" Natural Materials ") }}
    </td>
    <div class="hidden">/</div>

    <td rowspan="1" colspan="2">
      {{ $t(" Sand ") }}
    </td>
    <td class="bg-white">
      <img src="../assets/Picture14.png" class="mx-auto" alt="" />
    </td>
    <td class="bg--300">
      <input type="checkbox" id="External-row-18" name="ahosting" value="" class="hidden " required />
      <label for="External-row-18"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg--300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg--500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-18" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-18"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input disabled type="checkbox" id="External-row-18" name="ahosting" value="" class="hidden" required />
      <label for="External-row-18"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-18" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-18"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
      <div class="hidden">/</div>
    </td>
    <td>50%</td>
  </tr>
  <tr id="Ext-row-19">
    <div class="hidden">
      <td rowspan="16" colspan="1">
        {{ $t(" Requirements for Designing Outdoor Educational Spaces: ") }}
      </td>
      <div class="hidden">/</div>

      <td rowspan="6" colspan="1">
        {{ $t(" Floor ") }}
      </td>
      <div class="hidden">/</div>

      <td rowspan="3" colspan="1">
        {{ $t(" Natural Materials ") }}
      </td>
      /

    </div>
    <td rowspan="1" colspan="2">
      {{ $t(" Marble ") }}
    </td>
    <td class="bg-white">
      <img src="../assets/Picture15.png" class="mx-auto" alt="" />
    </td>
    <td class="bg--300">
      <input type="checkbox" id="External-row-19" name="ahosting" value="" class="hidden " requi />
      <label for="External-row-19"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg--300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg--500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-19" name="ahosting" value="" class="hidden" required />
      <label for="External-row-19"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input disabled type="checkbox" id="External-row-19" name="ahosting" value="" class="hidden" required />
      <label for="External-row-19"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-19" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-19"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
      <div class="hidden">/</div>
    </td>
    <td>25%</td>
  </tr>
  <tr id="Ext-row-20">
    <div class="hidden">
      <td rowspan="16" colspan="1">
        {{ $t(" Requirements for Designing Outdoor Educational Spaces: ") }}
      </td>
      <div class="hidden">/</div>

      <td rowspan="6" colspan="1">
        {{ $t(" Floor ") }}
      </td>
      <div class="hidden">/</div>

      <td rowspan="3" colspan="1">
        {{ $t(" Natural Materials ") }}
      </td>
      /

    </div>
    <td rowspan="1" colspan="2">
      {{ $t(" Stones ") }}
    </td>
    <td class="bg-white">
      <img src="../assets/Picture16.png" class="mx-auto" alt="" />
    </td>
    <td class="bg--300">
      <input type="checkbox" id="External-row-20" name="ahosting" value="" class="hidden " requi />
      <label for="External-row-20"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg--300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg--500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
       
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-20" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-20"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input disabled type="checkbox" id="External-row-20" name="ahosting" value="" class="hidden" required />
      <label for="External-row-20"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-20" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-20"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
      <div class="hidden">/</div>
    </td>
    <td>50%</td>
  </tr>
  <tr id="Ext-row-21">
    <div class="hidden">
      <td rowspan="16" colspan="1">
        {{ $t(" Requirements for Designing Outdoor Educational Spaces: ") }}
      </td>
      <div class="hidden">/</div>


    </div>
    <td rowspan="3" colspan="1">
      {{ $t(" Ceiling ") }}
    </td>
    <div class="hidden">/</div>

    <td rowspan="1" colspan="3">
      {{ $t(" Totally Shaded") }}
    </td>

    <td class="bg-white">
      <img src="../assets/Picture17.jpg" class="mx-auto" alt="" />
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-21" name="ahosting" value="" class="hidden" required />
      <label for="External-row-21"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-red- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-21" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-21"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input disabled type="checkbox" id="External-row-21" name="ahosting" value="" class="hidden " required />
      <label for="External-row-21"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-green- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-21" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-21"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
      <div class="hidden">/</div>
    </td>
    <td>50%</td>
  </tr>
  <tr id="Ext-row-22">
    <div class="hidden">
      <td rowspan="16" colspan="1">
        {{ $t(" Requirements for Designing Outdoor Educational Spaces: ") }}
      </td>
      <div class="hidden">/</div>


      <td rowspan="3" colspan="1">
        {{ $t(" Ceiling ") }}
      </td>
      <div class="hidden">/</div>
    </div>

    <td rowspan="1" colspan="3">
      {{ $t(" Semi-shaded (to be exposed indirectly to sunlight and protected from diseases)  ") }}
    </td>

    <td class="bg-white">
      <img src="../assets/Picture18.png" class="mx-auto" alt="" />
    </td>
    <td class="bg-red-300">
      <input type="checkbox" id="External-row-22" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-22"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-22" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-22"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input disabled type="checkbox" id="External-row-22" name="ahosting" value="" class="hidden " required />
      <label for="External-row-22"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-22" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-22"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
      <div class="hidden">/</div>
    </td>
    <td>75%</td>
  </tr>
  <tr id="Ext-row-23">
    <div class="hidden">
      <td rowspan="16" colspan="1">
        {{ $t(" Requirements for Designing Outdoor Educational Spaces: ") }}
      </td>
      <div class="hidden">/</div>


      <td rowspan="3" colspan="1">
        {{ $t(" Ceiling ") }}
      </td>
      <div class="hidden">/</div>
    </div>
    <td rowspan="1" colspan="3">
      {{ $t(" Non-shaded (exposed to the sunlight to protect from diseases) ") }}
    </td>

    <td class="bg-white">
      <img src="../assets/Picture19.jpg" class="mx-auto" alt="" />
    </td>
    <td class="bg-red-300">
      <input type="checkbox" id="External-row-23" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-23"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-23" name="ahosting" value="" class="hidden" required />
      <label for="External-row-23"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input disabled type="checkbox" id="External-row-23" name="ahosting" value="" class="hidden " required />
      <label for="External-row-23"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-green- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
       
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-23" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-23"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
      <div class="hidden">/</div>
    </td>
    <td>50%</td>
  </tr>
  <tr id="Ext-row-24">
    <div class="hidden">
      <td rowspan="16" colspan="1">
        {{ $t(" Requirements for Designing Outdoor Educational Spaces: ") }}
      </td>
      <div class="hidden">/</div>
    </div>
    <td rowspan="2" colspan="1">
      {{ $t(" Barrier ") }}
    </td>
    <div class="hidden">/</div>
    <td rowspan="1" colspan="3">
      {{ $t(" Buildings & Hard Fences ") }}
    </td>

    <td class="bg-white">
      <img src="../assets/Picture20.png" class="mx-auto" alt="" />
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-24" name="ahosting" value="" class="hidden" required />
      <label for="External-row-24"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-red- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-24" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-24"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input disabled type="checkbox" id="External-row-24" name="ahosting" value="" class="hidden" required />
      <label for="External-row-24"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-green- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-24" name="ahosting" value="" class="hidden" required />
      <label for="External-row-24"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
      <div class="hidden">/</div>
    </td>
    <td>25%</td>
  </tr>
  <tr id="Ext-row-25">
    <div class="hidden">
      <td rowspan="16" colspan="1">
        {{ $t(" Requirements for Designing Outdoor Educational Spaces: ") }}
      </td>
      <div class="hidden">/</div>
      <td rowspan="2" colspan="1">
        {{ $t(" Barrier ") }}
      </td>
      <div class="hidden">/</div>
    </div>
    <td rowspan="1" colspan="3">
      {{ $t(" Trees & Soft Fences ") }}
    </td>

    <td class="bg-white">
      <img src="../assets/Picture21.png" class="mx-auto w-24" alt="" />
    </td>
    <td class="bg-red-300">
      <input type="checkbox" id="External-row-25" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-25"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-25" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-25"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input disabled type="checkbox" id="External-row-25" name="ahosting" value="" class="hidden" required />
      <label for="External-row-25"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-25" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-25"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
      <div class="hidden">/</div>
    </td>
    <td>75%</td>
  </tr>
  <tr id="Ext-row-26" class="">
    <div class="hidden">
      <td rowspan="16" colspan="1">
        {{ $t(" Requirements for Designing Outdoor Educational Spaces: ") }}
      </td>
      <div class="hidden">/</div>

    </div>
    <td rowspan="2" colspan="1">
      {{ $t(" The form ") }}
    </td>
    <div class="hidden">/</div>

    <td rowspan="1" colspan="2">
      {{ $t(" Geometric Form ") }}
    </td>
    <div class="hidden">/</div>

    <td rowspan="2" colspan="1">
      {{ $t(" Select one Form ") }}
    </td>
    <td class="bg-white">
      <img src="../assets/Picture22.jpg" class="mx-auto w-12" alt="" />
    </td>
    <td class="bg-red-300">
      <input type="checkbox" id="External-row-26" name="ahosting" value="1" class="hidden peer group1-checkbox"
        required />
      <label for="External-row-26"
        class="inline-flex text-center items-center justify-center w-full group1-checkbox h-full py-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-26" name="ahosting" value="1" class="hidden peer group1-checkbox"
        required />
      <label for="External-row-26"
        class="inline-flex text-center items-center justify-center w-full group1-checkbox h-full py-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input disabled type="checkbox" id="External-row-26" name="ahosting" value="1" class="hidden peer group1-checkbox"
        required />
      <label for="External-row-26"
        class="inline-flex text-center items-center justify-center w-full group1-checkbox h-full py-5 text-gray-500 bg-green-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-26" name="ahosting" value="1" class="hidden peer group1-checkbox"
        required />
      <label for="External-row-26"
        class="inline-flex text-center items-center justify-center w-full group1-checkbox h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
      <div class="hidden">/</div>
    </td>
    <td>100%</td>
  </tr>
  <tr id="Ext-row-27" class="">
    <div class="hidden">
      <td rowspan="16" colspan="1">
        {{ $t(" Requirements for Designing Outdoor Educational Spaces: ") }}
      </td>
      <div class="hidden">/</div>

      <td rowspan="2" colspan="1">
        {{ $t(" The form ") }}
      </td>
      <div class="hidden">/</div>
    </div>

    <td rowspan="1" colspan="2">
      {{ $t(" Organic Form ") }}
    </td>

    <td class="bg-white">
      <img src="../assets/Picture23.png" class="mx-auto" alt="" />
    </td>
    <td class="bg-red-300">
      <input type="checkbox" id="External-row-27" name="ahosting" value="1" class="hidden peer group2-checkbox"
        required />
      <label for="External-row-27"
        class="inline-flex text-center items-center justify-center w-full group-checkbox h-full py-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-27" name="ahosting" value="1" class="hidden peer group2-checkbox"
        required />
      <label for="External-row-27"
        class="inline-flex text-center items-center justify-center w-full group-checkbox h-full py-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input disabled type="checkbox" id="External-row-27" name="ahosting" value="1" class="hidden peer group2-checkbox"
        required />
      <label for="External-row-27"
        class="inline-flex text-center items-center justify-center w-full group-checkbox h-full py-5 text-gray-500 bg-green-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-27" name="ahosting" value="1" class="hidden peer group2-checkbox"
        required />
      <label for="External-row-27"
        class="inline-flex text-center items-center justify-center w-full group-checkbox h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
      <div class="hidden">/</div>
    </td>
    <td>100%</td>
  </tr>
  <tr id="Ext-row-28">
    <div class="hidden">
      <td rowspan="16" colspan="1">
        {{ $t(" Requirements for Designing Outdoor Educational Spaces: ") }}
      </td>
      <div class="hidden">/</div>


    </div>
    <td rowspan="3" colspan="1">
      {{ $t(" Furniture ") }}
    </td>
    <div class="hidden">/</div>

    <td rowspan="1" colspan="3">
      {{ $t(" Play Areas - Playgrounds ") }}
    </td>

    <td class="bg-white">
      <img src="../assets/Picture24.png" class="mx-auto" alt="" />
    </td>
    <td class="bg--300">
      <input type="checkbox" id="External-row-28" name="ahosting" value="" class="hidden " requi />
      <label for="External-row-28"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg--300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg--500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
       
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-28" name="ahosting" value="" class="hidden " required />
      <label for="External-row-28"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg--200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg--400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        
      </label>
    </td>
    <td class="bg-white">
      <input disabled type="checkbox" id="External-row-28" name="ahosting" value="" class="hidden " required />
      <label for="External-row-28"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg--300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg--400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
       
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-28" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-28"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
      <div class="hidden">/</div>
    </td>
    <td>25%</td>
  </tr>
  <tr id="Ext-row-29">
    <div class="hidden">
      <td rowspan="16" colspan="1">
        {{ $t(" Requirements for Designing Outdoor Educational Spaces: ") }}
      </td>
      <div class="hidden">/</div>


      <td rowspan="3" colspan="1">
        {{ $t(" Furniture ") }}
      </td>
      <div class="hidden">/</div>
    </div>

    <td rowspan="1" colspan="3">
      {{ $t(" Gathering Places for Students ") }}
    </td>

    <td class="bg-white">
      <img src="../assets/Picture25.png" class="mx-auto" alt="" />
    </td>
    <td class="bg--300">
      <input type="checkbox" id="External-row-29" name="ahosting" value="" class="hidden " required />
      <label for="External-row-29"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg--300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg--500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-29" name="ahosting" value="" class="hidden " required />
      <label for="External-row-29"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg--200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg--400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        
      </label>
    </td>
    <td class="bg-white">
      <input disabled type="checkbox" id="External-row-29" name="ahosting" value="" class="hidden" required />
      <label for="External-row-29"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-29" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-29"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
      <div class="hidden">/</div>
    </td>
    <td>25%</td>
  </tr>
  <tr id="Ext-row-30">
    <div class="hidden">
      <td rowspan="16" colspan="1">
        {{ $t(" Requirements for Designing Outdoor Educational Spaces: ") }}
      </td>
      <div class="hidden">/</div>


      <td rowspan="3" colspan="1">
        {{ $t(" Furniture ") }}
      </td>
      <div class="hidden">/</div>
    </div>
    <td rowspan="1" colspan="3">
      {{ $t(" Sitting Areas ") }}
    </td>

    <td class="bg-white">
      <img src="../assets/Picture26.png" class="mx-auto" alt="" />
    </td>
    <td class="bg--300">
      <input type="checkbox" id="External-row-30" name="ahosting" value="" class="hidden " requi />
      <label for="External-row-30"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg--300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg--500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-30" name="ahosting" value="" class="hidden " required />
      <label for="External-row-30"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg--200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg--400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        
      </label>
    </td>
    <td class="bg-white">
      <input disabled type="checkbox" id="External-row-30" name="ahosting" value="" class="hidden" required />
      <label for="External-row-30"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-30" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-30"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
      <div class="hidden">/</div>
    </td>
    <td>25%</td>
  </tr>
  <tr id="Ext-row-31">
    <td rowspan="1" colspan="11" class="h-4 bg-[#bfbfbf]"></td>
  </tr>
  <tr id="Ext-row-32" class="">
    <td rowspan="6" colspan="1">
      {{ $t(" Building Form ") }}
    </td>
    <div class="hidden">/</div>

    <td rowspan="1" colspan="3">
      {{ $t(" Linear Type ") }}
    </td>
    <div class="hidden">/</div>


    <td rowspan="6" colspan="1">
      {{ $t(" Choose one Type ") }}
    </td>
    <td class="bg-white">
      <img src="../assets/Picture27.png" class="mx-auto" alt="" />
    </td>
    <td class="bg-red-300">
      <input type="checkbox" id="External-row-32" name="fav" value="1" class="hidden peer group3-checkbox" required />
      <label for="External-row-32"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-32" name="ahosting" value="1" class="hidden peer group3-checkbox"
        required />
      <label for="External-row-32"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input disabled type="checkbox" id="External-row-32" name="ahosting" value="1" class="hidden peer group3-checkbox"
        required />
      <label for="External-row-32"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-green-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-32" name="ahosting" value="1" class="hidden peer group3-checkbox"
        required />
      <label for="External-row-32"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
      <div class="hidden">/</div>
    </td>
    <td>100%</td>
  </tr>
  <tr id="Ext-row-33" class="">
    <div class="hidden">
      <td rowspan="6" colspan="1">
        {{ $t(" Building Form ") }}
      </td>
      <div class="hidden">/</div>


    </div>
    <td rowspan="1" colspan="3">
      {{ $t(" Finger Type ") }}
    </td>

    <td class="bg-white">
      <img src="../assets/Picture28.png" class="mx-auto" alt="" />
    </td>
    <td class="bg-red-300">
      <input type="checkbox" id="External-row-33" name="fav" value="1" class="hidden peer group4-checkbox" required />
      <label for="External-row-33"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-33" name="ahosting" value="1" class="hidden peer group4-checkbox"
        required />
      <label for="External-row-33"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input disabled type="checkbox" id="External-row-33" name="ahosting" value="1" class="hidden peer group4-checkbox"
        required />
      <label for="External-row-33"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-green-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-33" name="ahosting" value="1" class="hidden peer group4-checkbox"
        required />
      <label for="External-row-33"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
      <div class="hidden">/</div>
    </td>
    <td>100%</td>
  </tr>
  <tr id="Ext-row-34" class="">
    <div class="hidden">
      <td rowspan="6" colspan="1">
        {{ $t(" Building Form ") }}
      </td>
      <div class="hidden">/</div>


    </div>
    <td rowspan="1" colspan="3">
      {{ $t(" Single court Type ") }}
    </td>

    <td class="bg-white">
      <img src="../assets/Picture29.png" class="mx-auto" alt="" />
    </td>
    <td class="bg-red-300">
      <input type="checkbox" id="External-row-34" name="ahosting" value="1" class="hidden peer group5-checkbox"
        required />
      <label for="External-row-34"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-34" name="ahosting" value="1" class="hidden peer group5-checkbox"
        required />
      <label for="External-row-34"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input disabled type="checkbox" id="External-row-34" name="ahosting" value="1" class="hidden peer group5-checkbox"
        required />
      <label for="External-row-34"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-green-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-34" name="ahosting" value="1" class="hidden peer group5-checkbox"
        required />
      <label for="External-row-34"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
      <div class="hidden">/</div>
    </td>
    <td>100%</td>
  </tr>
  <tr id="Ext-row-35" class="">
    <div class="hidden">
      <td rowspan="6" colspan="1">
        {{ $t(" Building Form ") }}
      </td>
      <div class="hidden">/</div>


    </div>
    <td rowspan="1" colspan="3">
      {{ $t(" Multi- court type ") }}
    </td>

    <td class="bg-white">
      <img src="../assets/Picture30.png" class="mx-auto" alt="" />
    </td>
    <td class="bg-red-300">
      <input type="checkbox" id="External-row-35" name="ahosting" value="1" class="hidden peer group6-checkbox"
        required />
      <label for="External-row-35"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-35" name="ahosting" value="1" class="hidden peer group6-checkbox"
        required />
      <label for="External-row-35"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input disabled type="checkbox" id="External-row-35" name="ahosting" value="1" class="hidden peer group6-checkbox"
        required />
      <label for="External-row-35"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-green-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-35" name="ahosting" value="1" class="hidden peer group6-checkbox"
        required />
      <label for="External-row-35"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
      <div class="hidden">/</div>
    </td>
    <td>100%</td>
  </tr>
  <tr id="Ext-row-36" class="">
    <div class="hidden">
      <td rowspan="6" colspan="1">
        {{ $t(" Building Form ") }}
      </td>
      <div class="hidden">/</div>


    </div>
    <td rowspan="2" colspan="1">
      {{ $t(" Other Types ") }}
    </td>
    <div class="hidden">/</div>

    <td rowspan="1" colspan="2">
      {{ $t(" L-Type ") }}
    </td>

    <td  class="bg-white">
      <img   src="../assets/Picture31.png" class="mx-auto transform -scale-x-100"  alt="" />
    </td>
    <td class="bg-red-300">
      <input type="checkbox" id="External-row-36" name="fav" value="1" class="hidden peer group7-checkbox" required />
      <label for="External-row-36"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-36" name="ahosting" value="1" class="hidden peer group7-checkbox"
        required />
      <label for="External-row-36"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input disabled type="checkbox" id="External-row-36" name="ahosting" value="1" class="hidden peer group7-checkbox"
        required />
      <label for="External-row-36"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-green-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-36" name="ahosting" value="1" class="hidden peer group7-checkbox"
        required />
      <label for="External-row-36"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
      <div class="hidden">/</div>
    </td>
    <td>100%</td>
  </tr>
  <tr id="Ext-row-37" class="">
    <div class="hidden">
      <td rowspan="6" colspan="1">
        {{ $t(" Building Form ") }}
      </td>
      <div class="hidden">/</div>


      <td rowspan="2" colspan="1">
        {{ $t(" Exter Types ") }}
      </td>
      <div class="hidden">/</div>
    </div>
    <td rowspan="1" colspan="2">
      {{ $t(" U- Type ") }}
    </td>

    <td class="bg-white">
      <img src="../assets/Picture32.png" class="mx-auto" alt="" />
    </td>
    <td class="bg-red-300">
      <input type="checkbox" id="External-row-37" name="fav" value="1" class="hidden peer group8-checkbox" required />
      <label for="External-row-37"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-37" name="ahosting" value="1" class="hidden peer group8-checkbox"
        required />
      <label for="External-row-37"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input disabled type="checkbox" id="External-row-37" name="ahosting" value="1" class="hidden peer group8-checkbox"
        required />
      <label for="External-row-37"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-green-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-37" name="ahosting" value="1" class="hidden peer group8-checkbox"
        required />
      <label for="External-row-37"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
      <div class="hidden">/</div>
    </td>
    <td>100%</td>
  </tr>
  <tr id="Ext-row-38">
    <td rowspan="1" colspan="11" class="h-4 bg-[#bfbfbf]"></td>
  </tr>
  <tr id="Ext-row-39">
    <td>
      {{ $t(" student area in outdoor space ") }}
    </td>
    <div class="hidden">/</div>

    <td rowspan="1" colspan="4">
      {{ $t(" From (4)m2 to (12) m2 according to group age  ") }}
    </td>

    <td class="bg-white">
      <img src="../assets/Picture33.png" class="mx-auto" alt="" />
    </td>
    <td class="bg-red-300">
      <input type="checkbox" id="External-row-39" name="fav" value="1" class="hidden peer" required />
      <label for="External-row-39"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-39" name="ahosting" value="" class="hidden" required />
      <label for="External-row-39"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input disabled type="checkbox" id="External-row-39" name="ahosting" value="" class="hidden" required />
      <label for="External-row-39"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-39" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-39"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
      <div class="hidden">/</div>
    </td>
    <td>50%</td>
  </tr>
  <tr id="Ext-row-40">
    <td rowspan="1" colspan="11" class="h-4 bg-[#bfbfbf]"></td>
  </tr>
  <tr id="Ext-row-41" class="bg-[#c8c8c8]">
    <td rowspan="2" colspan="1">
      {{ $t(" Precautionary measures for outdoor spaces (Layout) ") }}
    </td>
    <div class="hidden">/</div>

    <td rowspan="1" colspan="4">
      {{
        $t(
          " Using lightweight Structures to Create Outdoor Educational Spaces "
        )
      }}
    </td>

    <td class="bg-white">
      <img src="../assets/Picture34.png" class="mx-auto" alt="" />
    </td>
    <td class="bg-red-300">
      <input type="checkbox" id="External-row-41" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-41"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-41" name="ahosting" value="1" class="hidden peer "
        required />
      <label for="External-row-41"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input disabled type="checkbox" id="External-row-41" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-41"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-green-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-40" name="ahosting" value="1" class="hidden peer" required />
      <label for="External-row-40"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
      <div class="hidden">/</div>
    </td>
    <td>100%</td>
  </tr>
  <tr id="Ext-row-42" class="bg-[#c8c8c8]">
    <div class="hidden">
      <td rowspan="2" colspan="1">
        {{ $t(" Precautionary measures for outdoor spaces (Layout) ") }}
      </td>
      /
    </div>
    <td rowspan="1" colspan="4">
      {{ $t(" Organizing Entry to The School with Social Distancing ") }}
    </td>

    <td class="bg-white">
      <img src="../assets/Picture35.jpg" class="mx-auto" alt="" />
    </td>
    <td class="bg-white">
      <input @click="calculateColumnSum" type="checkbox" id="External-row-42" name="ahosting" value="1"
        class="hidden peer" required />
      <label for="External-row-42"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svgGlobal/>
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-42" name="ahosting" value="" class="hidden" required />
      <label for="External-row-42"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
    </td>
    <td class="bg-white">
      <input disabled type="checkbox" id="External-row-42" name="ahosting" value="" class="hidden " required />
      <label for="External-row-42"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg--300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg--400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
       
      </label>
    </td>
    <td class="bg-white">
      <input type="checkbox" id="External-row-42" name="ahosting" value="" class="hidden" required />
      <label for="External-row-42"
        class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      </label>
      <div class="hidden">/</div>
    </td>
    <td>25%</td>
  </tr>
  <tr id="Ext-row-43" class="bg-[#8eaadb]">
    <td class="bg-[#8eaadb]" rowspan="1" colspan="7">
      {{
        $t(" No. of Realized Points for Resilient Design Criteria in layout")
      }}
    </td>
    <td  class="bg-[#2f5496] text-white" rowspan="6">
      <button @click="unSelctAll()">
        <span>

                          {{ $t("UNSELECT ALL") }}

        </span>
      </button>
    </td>
    <td>{{ columnSums[0] }}</td>
    <td>{{ columnSums[1] }}</td>
    <td>{{ columnSums[2] }}</td>
    <td>{{ columnSums[3] }}</td>

    <td class="bg-[#2f5496] text-white" rowspan="6">
      <button @click="GoEnhance()">
        <span>
          {{ $t("Recommendation") }}
          
        </span>
      </button>
     
    </td>
  </tr>
  <tr id="Ext-row-44" class="bg-[#8eaadb]">
    <td class="bg-[#8eaadb]" rowspan="1" colspan="7">
      {{
        $t(
          " Total No. of Realized Points for Resilient Design Criteria in layout"
        )
      }}
    </td>

    <td rowspan="1" colspan="4">{{ totalSum.toFixed(0) }}  {{ $t("Points") }}</td>
  </tr>
  <tr id="Ext-row-44" class="bg-[#8eaadb]">
    <td class="bg-[#8eaadb]" rowspan="1" colspan="7">
      {{
        $t(
          " Percentages of Realized Points for Resilient Design Criteria in layout "
        )
      }}
    </td>

    <div class="hidden">/</div>
    <div class="hidden">/</div>
    <td>{{ percentageFrom24.toFixed(0) }}%</td>
    <div class="hidden">/</div>
    <td>{{ percentageFrom19.toFixed(0) }}%</td>
    <div class="hidden">/</div>
    <td>{{ percentageFrom10.toFixed(0) }}%</td>
    <td>{{ percentageFrom27.toFixed(0) }}%</td>
  </tr>
  <tr id="Ext-row-45" class="bg-[#8eaadb]">
    <td class="bg-[#8eaadb]" rowspan="1" colspan="7">
      {{
        $t(
          " Total Percentages of Realized Points for Resilient Design Criteria in layout  "
        )
      }}
    </td>

    <div class="hidden">/</div>

    <td rowspan="1" colspan="4">{{ percentageFrom80.toFixed(0) }}%</td>
  </tr>
  <tr id="Ext-row-46 " class="bg-[#b4c6e7]">
    <td class="bg-[#b4c6e7]" rowspan="1" colspan="7">
      {{ $t(" Required Points for Resilient Design Criteria in layout  ") }}
    </td>

    <td>15</td>
    <td>17</td>
    <td>4</td>
    <td>29</td>
  </tr>
  <tr id="Ext-row-47" class="bg-[#b4c6e7]">
    <td class="bg-[#b4c6e7]" rowspan="1" colspan="7">
      {{
        $t(" Total Required Points for Resilient Design Criteria in layout ")
      }}
    </td>

    <td rowspan="1" colspan="4">65  {{ $t("Points") }}</td>
  </tr>
  </table>
  </div>
  <div class="block">
    <div class="grid max-lg:grid-cols-1    grid-cols-2 justify-center overflow-x-auto items-center text-center">
      <div class="text-xl grid grid-row-2 justify-center text-warp py-4">
      <p> 
        {{ $t(" Evaluation of the Resilient Design Criteria in Layout ") }}
        
      </p>
      <chart class="w-[600px] max-md:w-[350px] my-10 text-center" />
    </div>
    <div class="text-xl grid grid-row-2 justify-center text-warp py-4">
      <p> 
        {{ $t(" Total Evaluation of the Resilient Design Criteria in Layout ") }}
        
      </p>
      <chartTotal class="w-[600px] max-md:w-[350px] my-10 text-center" />

    </div>
    </div>
  </div>
 
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import svgGlobal from "../components/svg.vue"

import chart from "../charts/Ext-chart.vue";
import chartTotal from "../charts/Ext-chart-total.vue";
let router = useRouter();

let rows = ref([]);
let checkedrows = ref([]);
let uncheckedrows = ref([]);
let checkedCheckboxes = ref([]);
let uncheckedCheckboxes = ref([]);
let columnSums = ref({
  0: 0,
  1: 0,
  2: 0,
  3: 0,
});
let tableContentEST = ref("");
onMounted(() => {
  rows.value = Array.from(document.querySelectorAll('tr[id^="Ext-"]')); // Filter rows by ID
  initializeCheckboxes();
  updateColumnSums();
  saveRowsWithCheckboxesToLocalStorage();
});
 



const saveRowsWithCheckboxesToLocalStorage = () => {
  // Filter the rows to get rows with checkboxes
  const rowsWithCheckboxes = rows.value.filter((row) => {
    // Assuming the checkbox is identified by its type attribute
    return row.querySelector('input[type="checkbox"]') !== null;
  });

  // Map to get the outerHTML of each unchecked row with checkboxes
  rowsWithCheckboxes.forEach((row) => {
    const checkbox = row.querySelector('input[type="checkbox"]');

    // Check if the checkbox is not checked
    if (checkbox && !checkbox.checked) {
      // Save the row's outerHTML to local storage with a unique key
      localStorage.setItem(`unCheckRows-${row.id}`, row.outerHTML);
    }
    
   
  });
};




const initializeCheckboxes = () => {
  // Filter rows with IDs starting with "Ext-"
  const extRows = rows.value.filter((row) => row.id.startsWith("Ext-"));

  extRows.forEach((row, rowIndex) => {
    const checkboxesInRow = Array.from(
      row.querySelectorAll('input[type="checkbox"] ,input[type="checkbox"]')
    );

    checkboxesInRow.forEach((checkbox, checkboxIndex) => {
      // Generate the localStorage keys for the current checkbox
      const localStorageKey1 = `unCheckRows${row.id}-checkbox-${checkboxIndex}`;
      const localStorageKey2 = `Ext-row-${row.id}-checkbox-${checkboxIndex}`;

      // Retrieve the values from localStorage for the current checkbox using both keys
      const localStorageValue1 = localStorage.getItem(localStorageKey1);
      const localStorageValue2 = localStorage.getItem(localStorageKey2);

      // Set the checkbox state based on the retrieved values (either one being "true" will check the box)
      checkbox.checked =
        localStorageValue1 === "true" || localStorageValue2 === "true";

      // Add event listener for checkbox change
      checkbox.addEventListener("change", (event) =>
        handleCheckboxChange(event, rowIndex)
      );
      // Toggle SVG display for the checkbox
      toggleSvgDisplay(checkbox);

      // Update the checked/unchecked checkbox arrays based on the checkbox state
      if (checkbox.checked) {
        checkedCheckboxes.value.push(checkbox);
      } else {
        uncheckedCheckboxes.value.push(checkbox);
      }
    });
  });

  updateRowRefsBasedOnCheckboxState();
};

const handleCheckboxChange = (event, rowIndex) => {
  const clickedCheckbox = event.target;
  const row = clickedCheckbox.closest("tr");
  const groupExt1 = [
    "Ext-row-31",
    "Ext-row-32",
    "Ext-row-33",
    "Ext-row-34",
    "Ext-row-35",
    "Ext-row-36",
    "Ext-row-37",
  ];
  const groupExt2 = ["Ext-row-26", "Ext-row-27"];

  if (!row || !row.id.startsWith("Ext-")) return;
  const checkboxesInRow = Array.from(
    row.querySelectorAll('input[type="checkbox"]')
  );
 
  checkboxesInRow.forEach((checkbox, checkboxIndex) => {
    checkbox.checked = clickedCheckbox.checked;
    const localStorageKey = `Ext-row-${row.id}-checkbox-value-${checkboxIndex}`;

    if (checkbox.checked) {
      localStorage.setItem(localStorageKey, checkbox.value);
      localStorage.removeItem(`unCheckRows-${row.id}`);
    }
    else {
      localStorage.removeItem(localStorageKey);
      localStorage.setItem(`unCheckRows-${row.id}`, row.outerHTML);
    }
    localStorage.setItem(
      `Ext-row-${row.id}-checkbox-${checkboxIndex}`,
      checkbox.checked
    );


    toggleSvgDisplay(checkbox, rowIndex);
  });
  groupExt1.forEach((groupId) => {
    if (groupId !== row.id) {
      const otherRow = document.getElementById(groupId);
      if (otherRow && groupExt1.includes(row.id)) {
        const checkboxesInExterRow = Array.from(
          otherRow.querySelectorAll('input[type="checkbox"]')
        );
        checkboxesInExterRow.forEach((otherCheckbox, checkboxIndex) => {
          // Store the current state of the checkbox
          const isCheckedBeforeChange = otherCheckbox.checked;
          // Change the state of the checkbox
          otherCheckbox.checked = false;
          // Update local storage based on the original state of the checkbox
          const localStorageKey = `Ext-row-${groupId}-checkbox-value-${checkboxIndex}`;
          const localStorageKey2 = `Ext-row-${groupId}-checkbox-${checkboxIndex}`;
          if (isCheckedBeforeChange) {
            localStorage.removeItem(localStorageKey);
            localStorage.removeItem(localStorageKey2);
             localStorage.removeItem(`unCheckRows-${groupId}`);

            tableContentEST.value = getAllRowsFromLocalStorageExt();
            toggleSvgDisplay(otherCheckbox, rowIndex);
            saveRowsWithCheckboxesToLocalStorage();

          }
        });
      }
    }
  });
  groupExt2.forEach((groupId) => {
    if (groupId !== row.id) {
      const otherRow = document.getElementById(groupId);
      if (otherRow && groupExt2.includes(row.id)) {
        const checkboxesInExterRow = Array.from(
          otherRow.querySelectorAll('input[type="checkbox"]')
        );
        checkboxesInExterRow.forEach((otherCheckbox, checkboxIndex) => {
          // Store the current state of the checkbox
          const isCheckedBeforeChange = otherCheckbox.checked;
          // Change the state of the checkbox
          otherCheckbox.checked = false;
          // Update local storage based on the original state of the checkbox
          const localStorageKey = `Ext-row-${groupId}-checkbox-value-${checkboxIndex}`;
          const localStorageKey2 = `Ext-row-${groupId}-checkbox-${checkboxIndex}`;
          if (isCheckedBeforeChange) {
            localStorage.removeItem(localStorageKey);
            localStorage.removeItem(localStorageKey2);
            localStorage.removeItem(`unCheckRows-${groupId}`);
            
            toggleSvgDisplay(otherCheckbox, rowIndex);
            tableContentEST.value = getAllRowsFromLocalStorageExt();
            saveRowsWithCheckboxesToLocalStorage();

          }
          
        });
      }
    }
  });
  updateRowRefsBasedOnCheckboxState();
  updateColumnSums();
  saveRowsWithCheckboxesToLocalStorage();

};

const toggleSvgDisplay = (input) => {
  const label = input.nextElementSibling;

  if (input.type === "checkbox" || input.type === "checkbox") {
    if (input.checked) {
      if (label) {
        // Check if label exists
        label.classList.add("show-svg"); // Show the SVG if input is checked
      }
    } else {
      if (label) {
        // Check if label exists
        label.classList.remove("show-svg"); // Hide the SVG if input is unchecked
      }
    }
  }
};

const updateRowRefsBasedOnCheckboxState = () => {
  checkedrows.value = rows.value.filter((row, rowIndex) => {
    const checkboxesInRow = Array.from(
      row.querySelectorAll('input[type="checkbox"] ,input[type="checkbox"]')
    );

    return checkboxesInRow.some((checkbox) => checkbox.checked);
  });

  uncheckedrows.value = rows.value.filter((row, rowIndex) => {
    const checkboxesInRow = Array.from(
      row.querySelectorAll('input[type="checkbox"] ,input[type="checkbox"]')
    );
    return !checkboxesInRow.some((checkbox) => checkbox.checked);
  });
};

const calculateColumnSum = (columnIndex) => {
  let sum = 0;

  for (let key in localStorage) {
    if (
      key.startsWith(`Ext-row-`) &&
      key.endsWith(`-checkbox-value-${columnIndex}`)
    ) {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        sum += parseFloat(storedValue);
      }
    }
  }

  return sum;
};

const percentageFrom80 = computed(() => {
  return (totalSum.value / 65) * 100;
});
const percentageFrom24 = computed(() => {
  return (columnSums.value[0] / 15) * 100;
});
const percentageFrom19 = computed(() => {
  return (columnSums.value[1] / 17) * 100;
});
const percentageFrom10 = computed(() => {
  return (columnSums.value[2] / 4) * 100;
});
const percentageFrom27 = computed(() => {
  return (columnSums.value[3] / 29) * 100;
});
const totalSum = computed(() => {
  return (
    columnSums.value[0] +
    columnSums.value[1] +
    columnSums.value[2] +
    columnSums.value[3]
  );
});

const updateColumnSums = () => {
  for (let columnIndex = 0; columnIndex < 4; columnIndex++) {
    let sum = 0;

    for (let key in localStorage) {
      if (
        key.startsWith(`Ext-row-`) &&
        key.endsWith(`-checkbox-value-${columnIndex}`)
      ) {
        const storedValue = localStorage.getItem(key);
        if (storedValue) {
          sum += parseFloat(storedValue);
        }
      }
    }
    columnSums.value[columnIndex] = sum;
    // Save the value to local storage
    localStorage.setItem(`Ext-columnSum-${columnIndex}`, sum.toString());
  }
};
const checkedCheckbox = ref(null);

// Get all the checkboxes
const checkboxes = document.querySelectorAll(
  'tr[id^="Ext-"] input[type="checkbox"][name="ahosting"]'
);

// Watch the checkedCheckbox ref for changes
watch(checkedCheckbox, (newValue) => {
  checkboxes.forEach((checkbox) => {
    checkbox.disabled = checkbox !== newValue && newValue !== null;
  });
});

// Add event listeners to each checkbox
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      checkedCheckbox.value = this;
    } else if (checkedCheckbox.value === this) {
      checkedCheckbox.value = null;
      checkboxes.forEach((otherCheckbox) => {
        otherCheckbox.disabled = false;
      });
    }
  });
});
watch(
  columnSums,
  (newColumnSums) => {
    localStorage.setItem("Ext-columnSum-percentage-0", percentageFrom24.value);
    localStorage.setItem("Ext-columnSum-percentage-1", percentageFrom19.value);
    localStorage.setItem("Ext-columnSum-percentage-2", percentageFrom10.value);
    localStorage.setItem("Ext-columnSum-percentage-3", percentageFrom27.value);
    localStorage.setItem("Ext-columnSum-percentage-total", percentageFrom80.value);
  },
  { deep: true }
);
const getAllRowsFromLocalStorageExt = () => {
  const AllRowsArray = [];

  for (let key in localStorage) {
    if (key.startsWith("CheckRows-") && key.includes("Ext-")) {
      AllRowsArray.push({
        key: key,
        value: localStorage.getItem(key),
      });
    }
  }

  AllRowsArray.sort((a, b) => {
    const idA = parseInt(
      a.key.split("-").pop().replace("CheckRows", "")
    );
    const idB = parseInt(
      b.key.split("-").pop().replace("CheckRows", "")
    );
    return idA - idB;
  });

  return AllRowsArray.map((item) => item.value).join("");
};


const GoEnhance=()=>{
  router.push({ name: 'ConAll', hash: '#enhanceForm' })
  const targetElement = document.getElementById('enhanceForm');
   // Check if the element exists

   if (targetElement) {
    
     // Scroll to the target element
     targetElement.scrollIntoView({ behavior: 'smooth' });
   }

 
}


const unSelctAll = () => {
  rows.value.forEach((row, rowIndex) => {
    const checkboxesInRow = Array.from(
      row.querySelectorAll('input[type="checkbox"]')
    );

    checkboxesInRow.forEach((checkbox, checkboxIndex) => {
      const localStorageKey = `Ext-row-${row.id}-checkbox-value-${checkboxIndex}`;
      checkbox.checked =

      localStorage.setItem(`unCheckRows-${row.id}`, row.outerHTML);
      localStorage.removeItem(`Ext-row-${row.id}-checkbox-${checkboxIndex}`);
      localStorage.removeItem(localStorageKey);
      toggleSvgDisplay(checkbox, rowIndex);
      updateColumnSums();
    });
  });


};
setInterval(updateColumnSums, 3000);

</script>

<style>
@media print {
  .d-print-none {
    display: none !important;
  }

  .d-print {
    display: block !important;
  }
}

svg {
  display: none;
  /* Hide SVG by default */
}

.show-svg svg {
  display: block;
  /* Display SVG when the checkbox is checked */
}

/* Basic responsive table styling */
table {
  width: 100%;
  border-collapse: collapse;
}

img {
  width: 30px;
  height: 30px;
}

/* Media query for smaller devices */
@media (max-width: 500px) {
  table {
    font-size: 11px;
  }
}
</style>
