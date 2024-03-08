<template>
  <div class="">
    <table class="x-[1000px] max-lg:w-[900px] overflow-x-auto">
      <tr id="Oth-row-1">
        <td class="bg-[#2f5496] pt-[35rem] text-gray-100" rowspan="41" colspan="1">
            <p class=" text-6xl text-nowrap  -rotate-90 ">

              {{ $t(" Other Education Spaces ") }}
            </p>

          <div class="hidden">/</div>
        </td>
        <td rowspan="35" colspan="2" class="pt-[20rem]">
          <p class=" text-4xl text-nowrap  -rotate-90 ">

            {{ $t(" Design criteria (for Residential Education Spaces) ") }}
          </p>

          <div class="hidden">/</div>
        </td>
        <td rowspan="11" colspan="1">
          {{ $t(" Finishes ") }}
          <div class="hidden">/</div>
        </td>
        <td rowspan="2" colspan="3">
          {{ $t(" walls (choose one type) ") }}
          <div class="hidden">/</div>
        </td>

        <td>
          {{ $t(" Paints (light colors) ") }}
        </td>
        <td class="bg-white w-20">
          <img src="../assets/Picture141.jpg" class="mx-auto w-10" alt="" />
        </td>
        <td class="bg-white w-16">
          <input type="checkbox" id="Other-row-1" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-1"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white w-16">
          <input type="checkbox" id="Other-row-1" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-1"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white w-16">
          <input disabled type="checkbox" id="Other-row-1" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-1"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white w-16">
          <input type="checkbox" id="Other-row-1" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-1"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <div class="hidden">/</div>
        <td class="w-36">50%</td>
      </tr>
      <tr id="Oth-row-2">
        <div class="hidden">
          {{ $t(" Finishes ") }}/ {{ $t(" walls (choose one type) ") }}/
        </div>
        <td>
          {{ $t(" Wall Paper (light colors) ") }}
        </td>
        <td class="bg-white">
          <img src="../assets/Picture142.jpg" class="mx-auto w-10" alt="" />
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-2" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-2"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-2" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-2"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="Other-row-2" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-2"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-2" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-2"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <div class="hidden">/</div>
        <td>50%</td>
      </tr>
      <tr id="Oth-row-3">
        <td rowspan="1" colspan="3">
          <div class="hidden">{{ $t(" Finishes ") }}/</div>
          {{ $t(" Floor ") }}
        </td>

        <td>
          {{ $t(" Non-slip Materials ") }}
        </td>
        <td class="bg-white">
          <img src="../assets/Picture143.png" class="mx-auto w-10" alt="" />
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-3" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-3"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-3" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-3"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="Other-row-3" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-3"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-3" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-3"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <div class="hidden">/</div>
        <td>25%</td>
      </tr>
      <tr id="Oth-row-4">
        <td rowspan="1" colspan="10" class="h-4 bg-[#bfbfbf]"></td>
      </tr>
      <tr id="Oth-row-5" class="bg-[#c8c8c8]">
        <td rowspan="7" colspan="1">
          <div class="hidden">{{ $t(" Finishes ") }}/</div>

          {{
            $t(
              " Precautionary measures for finishing Residential Education Spaces"
            )
          }}
        </td>

        <td rowspan="2" colspan="2">
          <div class="hidden">/</div>

          {{ $t(" Floor ") }}
        </td>
        <td>
          <div class="hidden">/</div>

          {{ $t(" Fabric ") }}
        </td>
        <td class="bg-white">
          <img src="../assets/Picture144.png" class="mx-auto w-10" alt="" />
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-5" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-5"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-5" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-5"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="Other-row-5" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-5"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-5" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-5"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <div class="hidden">/</div>
        <td>75%</td>
      </tr>
      <tr id="Oth-row-6" class="bg-[#c8c8c8]">
        <div class="hidden">
          {{ $t(" Finishes ") }}/

          {{
            $t(
              " Precautionary measures for finishing Residential Education Spaces"
            )
          }}

          <div class="hidden">/</div>

          {{ $t(" Floor ") }}
          <div class="hidden">/</div>
        </div>

        <td>{{ $t(" Wood ") }}</td>
        <td class="bg-white">
          <img src="../assets/Picture145.png" class="mx-auto w-10" alt="" />
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-6" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-6"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-6" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-6"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="Other-row-6" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-6"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-6" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-6"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <div class="hidden">/</div>
        <td>75%</td>
      </tr>
      <tr id="Oth-row-7" class="bg-[#c8c8c8]">
        <div class="hidden">
          {{ $t(" Finishes ") }}/

          {{
            $t(
              " Precautionary measures for finishing Residential Education Spaces"
            )
          }}

          <div class="hidden">/</div>
        </div>
        <td rowspan="2" colspan="2">
          {{ $t(" walls (choose one type) ") }}
        </td>
        <div class="hidden">/</div>

        <td>
          {{ $t(" Paints (light colors)And resistant to viruses ") }}
        </td>
        <td class="bg-white">
          <img src="../assets/Picture146.jpg" class="mx-auto w-10" alt="" />
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-7" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-7"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-7" name="ahosting" value="" class="hidden " required />
          <label for="Other-row-7"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg--200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg--400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="Other-row-7" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-7"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-7" name="ahosting" value="" class="hidden " required />
          <label for="Other-row-7"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg--300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg--500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          
          </label>
        </td>
        <div class="hidden">/</div>
        <td>25%</td>
      </tr>
      <tr id="Oth-row-8" class="bg-[#c8c8c8]">
        <div class="hidden">
          {{ $t(" Finishes ") }}/

          {{
            $t(
              " Precautionary measures for finishing Residential Education Spaces"
            )
          }}

          <div class="hidden">/</div>
          <td rowspan="2" colspan="2">
            {{ $t(" Walls ") }}
          </td>
          <div class="hidden">/</div>
        </div>
        <td>
          {{ $t(" Wall Paper (light colors)And resistant to viruses ") }}
        </td>
        <td class="bg-white">
          <img src="../assets/Picture147.jpg" class="mx-auto w-10" alt="" />
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-8" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-8"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-8" name="ahosting" value="" class="hidden " required />
          <label for="Other-row-8"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg--200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg--400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="Other-row-8" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-8"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-8" name="ahosting" value="" class="hidden " required />
          <label for="Other-row-8"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg--300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg--500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
           
          </label>
        </td>
        <div class="hidden">/</div>
        <td>25%</td>
      </tr>
      <tr id="Oth-row-9" class="bg-[#c8c8c8]">
        <div class="hidden">
          {{ $t(" Finishes ") }}/

          {{
            $t(
              " Precautionary measures for finishing Residential Education Spaces"
            )
          }}

          <div class="hidden">/</div>
        </div>
        <td rowspan="3" colspan="1">
          {{ $t(" other surfaces") }}
          <div class="hidden">/</div>
        </td>
        <td rowspan="2" colspan="1">
          {{ $t(" furniture ") }}
          <div class="hidden">/</div>
        </td>
        <td>{{ $t(" Cotton ") }}</td>
        <td class="bg-white">
          <img src="../assets/Picture148.png" class="mx-auto w-10" alt="" />
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-9" name="ahosting" value="" class="hidden " required />
          <label for="Other-row-9"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg--300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg--500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
           
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-9" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-9"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="Other-row-9" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-9"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-9" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-9"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <div class="hidden">/</div>
        <td>25%</td>
      </tr>
      <tr id="Oth-row-10" class="bg-[#c8c8c8]">
        <div class="hidden">
          {{ $t(" Finishes ") }}/

          {{
            $t(
              " Precautionary measures for finishing Residential Education Spaces"
            )
          }}

          <div class="hidden">/</div>
          <td rowspan="3" colspan="1">
            {{ $t(" Materails ") }}
            <div class="hidden">/</div>
          </td>
          <td rowspan="2" colspan="1">
            {{ $t(" furniture ") }}
            <div class="hidden">/</div>
          </td>
        </div>

        <td>{{ $t(" Fabric ") }}</td>
        <td class="bg-white">
          <img src="../assets/Picture149.png" class="mx-auto w-10" alt="" />
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-10" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-10"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-10" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-10"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="Other-row-10" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-10"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-10" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-10"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <div class="hidden">/</div>
        <td>75%</td>
      </tr>
      <tr id="Oth-row-11" class="bg-[#c8c8c8]">
        <div class="hidden">
          {{ $t(" Finishes ") }}/

          {{
            $t(
              " Precautionary measures for finishing Residential Education Spaces"
            )
          }}

          <div class="hidden">/</div>
          <td rowspan="3" colspan="1">
            {{ $t(" Materails ") }}
            <div class="hidden">/</div>
          </td>
        </div>
        <td>{{ $t(" desk ") }}</td>
        <div class="hidden">/</div>

        <td>{{ $t(" Wood ") }}</td>
        <td class="bg-white">
          <img src="../assets/Picture150.png" class="mx-auto w-10" alt="" />
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-11" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-11"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Othernal-row-1" name="ahosting" value="1" class="hidden peer" required
            ref="checkboxRef" />
          <label for="Othernal-row-1"
            class="inline-flex text-center items-center justify-center w-full h-full py-5 text-gray-500 bg-yellow-200 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 show-svg">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="Other-row-11" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-11"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-11" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-11"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <div class="hidden">/</div>
        <td>75%</td>
      </tr>
      <tr id="Oth-row-12">
        <td rowspan="2" colspan="11" class="h-4 bg-[#bfbfbf]"></td>
      </tr>
      <tr id="Oth-row-13"></tr>

      <tr id="Oth-row-14">
        <td rowspan="15" colspan="1">
          {{ $t(" Indoor Air Quality (IAQ) ") }}
        </td>
        <div class="hidden">/</div>

        <td rowspan="2" colspan="1">
          {{ $t(" lighting ") }}
        </td>
        <div class="hidden">/</div>

        <td rowspan="1" colspan="3">
          {{ $t(" Natural ") }}
        </td>

        <td class="bg-white">
          <img src="../assets/Picture151.jpg" class="mx-auto w-10" alt="" />
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-14" name="ahosting" value="" class="hidden " required />
          <label for="Other-row-14"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg--300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg--500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-14" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-14"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="Other-row-14" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-14"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-14" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-14"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <div class="hidden">/</div>
        <td>50%</td>
      </tr>
      <tr id="Oth-row-15">
        <div class="hidden">
          <td rowspan="15" colspan="1">
            {{ $t(" Indoor Air Quality (IAQ) ") }}
          </td>
          /

          <td rowspan="2" colspan="1">
            {{ $t(" lighting ") }}
          </td>
          <div class="hidden">/</div>
        </div>
        <td rowspan="1" colspan="3">
          {{ $t(" Artificial ") }}
        </td>

        <td class="bg-white">
          <img src="../assets/Picture152.jpg" class="mx-auto w-10" alt="" />
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-15" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-15"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-15" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-15"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="Other-row-15" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-15"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-15" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-15"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <div class="hidden">/</div>
        <td>50%</td>
      </tr>
      <tr id="Oth-row-16">
        <div class="hidden">
          <td rowspan="15" colspan="1">
            {{ $t(" Indoor Air Quality (IAQ) ") }}
          </td>

          <div class="hidden">/</div>
        </div>
        <td rowspan="2" colspan="1">
          {{ $t(" Ventilation ") }}
        </td>
        <div class="hidden">/</div>

        <td rowspan="1" colspan="3">
          {{ $t(" Natural ") }}
        </td>

        <td class="bg-white">
          <img src="../assets/Picture153.png" class="mx-auto w-10" alt="" />
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-16" name="ahosting" value="" class="hidden " required />
          <label for="Other-row-16"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg--300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg--500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-16" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-16"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="Other-row-16" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-16"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-reen-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-16" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-16"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <div class="hidden">/</div>
        <td>50%</td>
      </tr>
      <tr id="Oth-row-17">
        <div class="hidden">
          <td rowspan="15" colspan="1">
            {{ $t(" Indoor Air Quality (IAQ) ") }}
          </td>

          <div class="hidden">/</div>
          <td rowspan="2" colspan="1">
            {{ $t(" Ventilation ") }}
          </td>
          <div class="hidden">/</div>
        </div>

        <td rowspan="1" colspan="3">
          {{ $t(" Artificial ") }}
        </td>

        <td class="bg-white">
          <img src="../assets/Picture154.png" class="mx-auto w-10" alt="" />
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-17" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-17"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-17" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-17"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="Other-row-17" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-17"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-17" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-17"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <div class="hidden">/</div>
        <td>50%</td>
      </tr>
      <tr id="Oth-row-18">
        <div class="hidden">
          <td rowspan="15" colspan="1">
            {{ $t(" Indoor Air Quality (IAQ) ") }}
          </td>

          <div class="hidden">/</div>
        </div>
        <td>{{ $t(" Opening Area ") }}</td>
        <td rowspan="1" colspan="3">
          <div class="hidden">/</div>
          {{ $t(" 8%of the room area  ") }}
        </td>

        <td class="bg-white">
          <img src="../assets/Picture155.png" class="mx-auto w-10" alt="" />
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-18" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-18"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-18" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-18"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="Other-row-18" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-18"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-18" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-18"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <div class="hidden">/</div>
        <td>75%</td>
      </tr>
      <tr id="Oth-row-19">
        <td rowspan="1" colspan="10" class="h-4 bg-[#bfbfbf]"></td>
      </tr>
      <tr id="Oth-row-20" class="bg-[#c8c8c8]">
        <div class="hidden">
          <td rowspan="15" colspan="1">
            {{ $t(" Indoor Air Quality (IAQ) ") }}
          </td>

          <div class="hidden">/</div>
        </div>
        <td rowspan="9" colspan="1">
          {{
            $t(
              " Precautionary measures for (IAQ) of Residential Education Spaces "
            )
          }}
        </td>
        <div class="hidden">/</div>

        <td rowspan="2" colspan="1">
          {{ $t(" lighting ") }}
        </td>
        <div class="hidden">/</div>

        <td rowspan="1" colspan="2">
          {{ $t(" Natural ") }}
        </td>
        <td class="bg-white">
          <img src="../assets/Picture156.jpg" class="mx-auto w-10" alt="" />
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-20" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-20"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-20" name="ahosting" value="" class="hidden " required />
          <label for="Other-row-20"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg--200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg--400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="Other-row-20" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-20"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-20" name="ahosting" value="" class="hidden " required />
          <label for="Other-row-20"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg--300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg--500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
           
          </label>
        </td>
        <div class="hidden">/</div>
        <td>25%</td>
      </tr>
      <tr id="Oth-row-21" class="bg-[#c8c8c8]">
        <div class="hidden">
          <td rowspan="15" colspan="1">
            {{ $t(" Indoor Air Quality (IAQ) ") }}
          </td>

          <div class="hidden">/</div>
          <td rowspan="9" colspan="1">
            {{
              $t(
                " Precautionary measures for (IAQ) of Residential Education Spaces "
              )
            }}
          </td>
          <div class="hidden">/</div>

          <td rowspan="2" colspan="1">
            {{ $t(" lighting ") }}
          </td>
          <div class="hidden">/</div>
        </div>

        <td>{{ $t(" Artificial ") }}</td>
        <div class="hidden">/</div>

        <td>
          {{ $t(" (Using ultraviolet (UV) light technology  ") }}
        </td>
        <td class="bg-white">
          <img src="../assets/Picture171.png" class="mx-auto w-10" alt="" />
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-21" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-21"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-21" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-21"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="Other-row-21" name="ahosting" value="" class="hidden " required />
          <label for="Other-row-21"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg--300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg--400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-21" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-21"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <div class="hidden">/</div>
        <td>25%</td>
      </tr>
      <tr id="Oth-row-22" class="bg-[#c8c8c8]">
        <div class="hidden">
          <td rowspan="15" colspan="1">
            {{ $t(" Indoor Air Quality (IAQ) ") }}
          </td>

          <div class="hidden">/</div>
          <td rowspan="9" colspan="1">
            {{
              $t(
                " Precautionary measures for (IAQ) of Residential Education Spaces "
              )
            }}
          </td>

          <div class="hidden">/</div>
        </div>
        <td rowspan="2" colspan="1">
          {{ $t(" Ventilation ") }}
        </td>
        <div class="hidden">/</div>

        <td rowspan="1" colspan="2">
          {{ $t(" Natural ") }}
        </td>
        <td class="bg-white">
          <img src="../assets/Picture158.png" class="mx-auto w-10" alt="" />
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-22" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-22"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-22" name="ahosting" value="" class="hidden " required />
          <label for="Other-row-22"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg--200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg--400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="Other-row-22" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-22"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-22" name="ahosting" value="" class="hidden " required />
          <label for="Other-row-22"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg--300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg--500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            
          </label>
        </td>
        <div class="hidden">/</div>
        <td>25%</td>
      </tr>
      <tr id="Oth-row-23" class="bg-[#c8c8c8]">
        <div class="hidden">
          <td rowspan="15" colspan="1">
            {{ $t(" Indoor Air Quality (IAQ) ") }}
          </td>

          <div class="hidden">/</div>
          <td rowspan="9" colspan="1">
            {{
              $t(
                " Precautionary measures for (IAQ) of Residential Education Spaces "
              )
            }}
          </td>

          <div class="hidden">/</div>
          <td rowspan="2" colspan="1">
            {{ $t(" Ventilation ") }}
          </td>
          <div class="hidden">/</div>
        </div>

        <td>{{ $t(" Artificial ") }}</td>
        <div class="hidden">/</div>

        <td>
          {{ $t(" Using air purifiers ") }}
        </td>
        <td class="bg-white">
          <img src="../assets/Picture159.png" class="mx-auto w-10" alt="" />
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-23" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-23"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-23" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-23"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="Other-row-23" name="ahosting" value="" class="hidden " required />
          <label for="Other-row-23"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg--300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg--400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-23" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-23"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <div class="hidden">/</div>
        <td>25%</td>
      </tr>
      <tr id="Oth-row-24" class="bg-[#c8c8c8]">
        <div class="hidden">
          <td rowspan="15" colspan="1">
            {{ $t(" Indoor Air Quality (IAQ) ") }}
          </td>

          <div class="hidden">/</div>
          <td rowspan="9" colspan="1">
            {{
              $t(
                " Precautionary measures for (IAQ) of Residential Education Spaces "
              )
            }}
          </td>

          <div class="hidden">/</div>
        </div>
        <td>{{ $t(" Temperature ") }}</td>
        <div class="hidden">/</div>

        <td rowspan="1" colspan="2">
          {{ $t(" Range (17 to 27)Celsius degree ") }}
        </td>
        <td class="bg-white">
          <img src="../assets/Picture160.jpg" class="mx-auto w-10" alt="" />
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-24" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-24"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-24" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-24"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="Other-row-24" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-24"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-24" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-24"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <div class="hidden">/</div>
        <td>75%</td>
      </tr>
      <tr id="Oth-row-25" class="bg-[#c8c8c8]">
        <div class="hidden">
          <td rowspan="15" colspan="1">
            {{ $t(" Indoor Air Quality (IAQ) ") }}
          </td>

          <div class="hidden">/</div>
          <td rowspan="9" colspan="1">
            {{
              $t(
                " Precautionary measures for (IAQ) of Residential Education Spaces "
              )
            }}
          </td>

          <div class="hidden">/</div>
        </div>
        <td>{{ $t(" Humidity ") }}</td>
        <div class="hidden">/</div>

        <td rowspan="1" colspan="2">
          <div class="hidden">/</div>
          {{ $t(" Range (40 to 60%) ") }}
        </td>
        <td class="bg-white">
          <img src="../assets/Picture161.jpg" class="mx-auto w-10" alt="" />
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-25" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-25"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-25" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-25"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="Other-row-25" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-25"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-25" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-25"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <div class="hidden">/</div>
        <td>75%</td>
      </tr>
      <tr id="Oth-row-26" class="bg-[#c8c8c8]">
        <div class="hidden">
          <td rowspan="15" colspan="1">
            {{ $t(" Indoor Air Quality (IAQ) ") }}
          </td>

          <div class="hidden">/</div>
          <td rowspan="9" colspan="1">
            {{
              $t(
                " Precautionary measures for (IAQ) of Residential Education Spaces "
              )
            }}
          </td>

          <div class="hidden">/</div>
        </div>
        <td rowspan="3" colspan="1">
          {{ $t(" indoor plants ") }}
        </td>
        <div class="hidden">/</div>

        <td rowspan="1" colspan="2">
          {{ $t(" Snake plant ") }}
        </td>
        <td class="bg-white">
          <img src="../assets/Picture162.jpg" class="mx-auto w-10" alt="" />
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-26" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-26"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-26" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-26"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="Other-row-26" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-26"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-26" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-26"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <div class="hidden">/</div>
        <td>75%</td>
      </tr>
      <tr id="Oth-row-27" class="bg-[#c8c8c8]">
        <div class="hidden">
          <td rowspan="15" colspan="1">
            {{ $t(" Indoor Air Quality (IAQ) ") }}
          </td>

          <div class="hidden">/</div>
          <td rowspan="9" colspan="1">
            {{
              $t(
                " Precautionary measures for (IAQ) of Residential Education Spaces "
              )
            }}
          </td>

          <div class="hidden">/</div>

          <td rowspan="3" colspan="1">
            {{ $t(" indoor plants ") }}
          </td>
          <div class="hidden">/</div>
        </div>

        <td rowspan="1" colspan="2">
          {{ $t(" Aloe vera ") }}
        </td>
        <td class="bg-white">
          <img src="../assets/Picture163.png" class="mx-auto w-10" alt="" />
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-27" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-27"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-27" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-27"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="Other-row-27" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-27"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-27" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-27"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <div class="hidden">/</div>
        <td>75%</td>
      </tr>
      <tr id="Oth-row-28" class="bg-[#c8c8c8]">
        <div class="hidden">
          <td rowspan="15" colspan="1">
            {{ $t(" Indoor Air Quality (IAQ) ") }}
          </td>

          <div class="hidden">/</div>
          <td rowspan="9" colspan="1">
            {{
              $t(
                " Precautionary measures for (IAQ) of Residential Education Spaces "
              )
            }}
          </td>

          <div class="hidden">/</div>

          <td rowspan="3" colspan="1">
            {{ $t(" indoor plants ") }}
          </td>
          <div class="hidden">/</div>
        </div>
        <td rowspan="1" colspan="2">
          {{ $t(" Cactus ") }}
        </td>
        <td class="bg-white">
          <img src="../assets/Picture164.png" class="mx-auto w-10" alt="" />
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-28" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-28"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-28" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-28"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="Other-row-28" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-28"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-28" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-28"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <div class="hidden">/</div>
        <td>75%</td>
      </tr>
      <tr id="Oth-row-29">
        <td rowspan="1" colspan="11" class="h-4 bg-[#bfbfbf]"></td>
      </tr>
      <tr id="Oth-row-30">
        <td rowspan="7" colspan="1">
          {{ $t(" Infrastructure for Residential Education Spaces ") }}
        </td>
        <div class="hidden">/</div>
        <td rowspan="2" colspan="1">
          {{ $t(" Technology services ") }}
        </td>
        <div class="hidden">/</div>

        <td rowspan="1" colspan="3">
          {{ $t(" Availability of internet services ") }}
        </td>

        <td class="bg-white">
          <img src="../assets/Picture165.png" class="mx-auto w-28" alt="" />
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-30" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-30"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-30" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-30"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="Other-row-30" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-30"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-30" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-30"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <div class="hidden">/</div>
        <td>75%</td>
      </tr>
      <tr id="Oth-row-31">
        <div class="hidden">
          <td rowspan="2" colspan="2">
            {{ $t(" Technology services ") }}
          </td>
          /
        </div>
        <td rowspan="1" colspan="3">
          {{ $t(" Using Laptop or Tablet ") }}
        </td>

        <td class="bg-white">
          <img src="../assets/Picture166.png" class="mx-auto w-10" alt="" />
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-31" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-31"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-31" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-31"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="Other-row-31" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-31"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-31" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-31"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <div class="hidden">/</div>
        <td>75%</td>
      </tr>
      <tr rowspan="2" id="Oth-row-32">
        <td rowspan="4" colspan="1">
          {{ $t(" furniture ") }}
        </td>
        <div class="hidden">/</div>

        <td rowspan="1" colspan="3">
          {{ $t(" Height of student seats (28-42cm) ") }}
        </td>

        <td class="bg-white">
          <img src="../assets/Picture168.jpg" class="mx-auto w-10" alt="" />
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-32" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-32"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-32" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-32"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="Other-row-32" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-32"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-32" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-32"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <div class="hidden">/</div>
        <td>25%</td>
      </tr>
      <tr id="Oth-row-33">
       
  
      </tr>
      <tr id="Oth-row-34">
        <div class="hidden">
          <td rowspan="4" colspan="2">
            {{ $t(" furniture ") }}
          </td>
          <div class="hidden">/</div>
        </div>
        <td rowspan="1" colspan="3">
          {{ $t(" Height of student table (50-70cm) ") }}
        </td>

        <td class="bg-white">
          <img src="../assets/Picture169.jpg" class="mx-auto w-10" alt="" />
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-34" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-34"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-34" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-34"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow- cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg- dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="Other-row-34" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-34"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-34" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-34"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <div class="hidden">/</div>
        <td>25%</td>
      </tr>
      <tr id="Oth-row-35">
        <div class="hidden">
          <td rowspan="4" colspan="2">
            {{ $t(" furniture ") }}
          </td>
          <div class="hidden">/</div>
        </div>
        <td rowspan="1" colspan="3">
          {{ $t(" width of student table (55-65 cm) ") }}
        </td>

        <td class="bg-white">
          <img src="../assets/Picture170.png" class="mx-auto w-10" alt="" />
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-35" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-35"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-35" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-35"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input disabled type="checkbox" id="Other-row-35" name="ahosting" value="" class="hidden" required />
          <label for="Other-row-35"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          </label>
        </td>
        <td class="bg-white">
          <input type="checkbox" id="Other-row-35" name="ahosting" value="1" class="hidden peer" required />
          <label for="Other-row-35"
            class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
            </svg>
          </label>
        </td>
        <div class="hidden">/</div>
        <td>25%</td>
      </tr>
      <tr class="bg-[#8eaadb]" id="Oth-row-36">
        <td rowspan="1" colspan="7">
          {{
            $t(
              " No. of Realized Points for Resilient Design Criteria in Residential Education Spaces "
            )
          }}
        </td>

        <td class="bg-[#2f5496] text-white" rowspan="6">
         
         <button 
         @click="unSelctAll()"
         >
                         {{ $t("UNSELECT ALL") }}
 

         </button>
       </td>         <td>{{ columnSums[0] }}</td>

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
      <tr class="bg-[#8eaadb]" id="Oth-row-37">
        <td rowspan="1" colspan="7">
          {{
            $t(
              " Total No. of Realized Points for Resilient Design Criteria in Residential Education Spaces "
            )
          }}
        </td>

        <td rowspan="1" colspan="4">{{ totalSum }}</td>
      </tr>
      <tr id="Oth-row-38 " class="bg-[#8eaadb]">
        <td rowspan="1" colspan="7">
          {{
            $t(
              " Percentages of Realized Points for Resilient Design Criteria in Residential Education Spaces "
            )
          }}
        </td>

        <div class="hidden">/</div>
        <td>{{ percentageFrom24.toFixed(0) }}%</td>
        <div class="hidden">/</div>
        <td>{{ percentageFrom19.toFixed(0) }}%</td>
        <div class="hidden">/</div>
        <td>{{ percentageFrom10.toFixed(0) }}%</td>
        <div class="hidden">/</div>
        <td>{{ percentageFrom27.toFixed(0) }}%</td>
      </tr>
      <tr id="Oth-row-39" class="bg-[#8eaadb]">
        <td rowspan="1" colspan="7">
          {{
            $t(
              " Total Percentages of Realized Points for Resilient Design Criteria in Residential Education Spaces "
            )
          }}
        </td>

        <div class="hidden">/</div>
        <td rowspan="1" colspan="4">{{ percentageFrom80.toFixed(0) }}%</td>
      </tr>
      <tr id="Oth-row-40" class="bg-[#b4c6e7]">
        <td rowspan="1" colspan="7">
          {{
            $t(
              " Required Points for Resilient Design Criteria in Residential Education Spaces "
            )
          }}
        </td>

        <td>17</td>
        <td>15</td>
        <td>4</td>
        <td>20</td>
      </tr>
      <tr id="Oth-row-41" class="bg-[#b4c6e7]">
        <td rowspan="1" colspan="7">
          {{
            $t(
              " Total Required Points for Resilient Design Criteria in Residential Education Spaces "
            )
          }}
        </td>

        <td rowspan="1" colspan="4">56</td>
      </tr>
    </table>
  </div>
  <div class="block">
    <div class="grid max-lg:grid-cols-1    grid-cols-2 justify-center overflow-x-auto items-center text-center">


       <div class="text-xl grid grid-row-2 justify-center text-warp py-4">
        <p> 
          {{ $t(" Evaluation of the Resilient Design Criteria in Residential Education Spaces ") }}
          
        </p>
        <chart class="w-[600px] max-md:w-[350px] my-10 text-center" />
      </div>
      <div class="text-xl grid grid-row-2 justify-center text-warp py-4">

      <p> 
        {{ $t(" Total Evaluation of the Resilient Design Criteria in Residential Education Spaces ") }}
        
      </p>
      <chartTotal class="w-[600px] max-md:w-[350px] my-10 text-center" />
    </div>

    </div>
  </div>


</template>
<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import chart from "../charts/Oth-chart.vue";
import chartTotal from "../charts/Oth-chart-total.vue";

let router = useRouter();
let rows = ref([]);
let tdes = ref([]);
let checkedRows = ref([]);
let uncheckedRows = ref([]);
let columnSums = ref({
  0: 0,
  1: 0,
  2: 0,
  3: 0,
});
let tableContentOth = ref("");
let showEnhanceOthBTN = ref(false);
let showEnhanceOthOpen = ref(true);


onMounted(() => {
  rows.value = Array.from(document.querySelectorAll('tr[id^="Oth-"]')); // Select rows with IDs starting with "Oth-"
  initializeCheckboxes();
  updateColumnSums();
  saveRowsWithCheckboxesToLocalStorage();
});
const saveRowsWithCheckboxesToLocalStorage = () => {
  const rowsWithCheckboxes = rows.value.filter((row) => {
    return row.querySelector('input[type="checkbox"]') !== null;
  });

  rowsWithCheckboxes.forEach((row) => {
    const checkbox = row.querySelector('input[type="checkbox"]');
    // Check if the checkbox is not checked
    if (checkbox && !checkbox.checked) {
      // Save the row's outerHTML to local storage with a unique key
      localStorage.setItem(`unCheckRows-${row.id}`, row.outerHTML);
    }
    else if (checkbox && checkbox.checked) {
      // Save the row's outerHTML to local storage with a unique key
      localStorage.setItem(`CheckRows-${row.id}`, row.outerHTML);
    }
  });
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
const initializeCheckboxes = () => {
  rows.value.forEach((row, rowIndex) => {
    const checkboxesInRow = Array.from(
      row.querySelectorAll('input[type="checkbox"]')
    );
    checkboxesInRow.forEach((checkbox, checkboxIndex) => {
      checkbox.checked =
        localStorage.getItem(`Oth-row-${row.id}-checkbox-${checkboxIndex}`) ===
        "true";
      checkbox.addEventListener("change", (event) =>
        handleCheckboxChange(event, rowIndex)
      );
      toggleSvgDisplay(checkbox, rowIndex);
    });
  });
  updateRowRefsBasedOnCheckboxState();
};

const handleCheckboxChange = (event, rowIndex) => {
  const clickedCheckbox = event.target;
  const row = clickedCheckbox.closest("tr");
  const groupOth1 = ["Oth-row-1", "Oth-row-2"];
  const groupOth2 = ["Oth-row-7", "Oth-row-8"];
  if (!row || !row.id.startsWith("Oth-")) return;
  const checkboxesInRow = Array.from(
    row.querySelectorAll('input[type="checkbox"]')
  );
  groupOth1.forEach((groupId) => {
    if (groupId !== row.id) {
      const otherRow = document.getElementById(groupId);
      if (otherRow && groupOth1.includes(row.id)) {
        const checkboxesInOtherRow = Array.from(
          otherRow.querySelectorAll('input[type="checkbox"]')
        );
        checkboxesInOtherRow.forEach((otherCheckbox, checkboxIndex) => {
          // Store the current state of the checkbox
          const isCheckedBeforeChange = otherCheckbox.checked;
          // Change the state of the checkbox
          otherCheckbox.checked = false;
          // Update local storage based on the original state of the checkbox
          const localStorageKey = `Oth-row-${groupId}-checkbox-value-${checkboxIndex}`;
          const localStorageKey2 = `Oth-row-${groupId}-checkbox-${checkboxIndex}`;
          if (isCheckedBeforeChange) {
            localStorage.removeItem(localStorageKey);
            localStorage.removeItem(localStorageKey2);
            toggleSvgDisplay(otherCheckbox, rowIndex);
          }
          saveRowsWithCheckboxesToLocalStorage();

          localStorage.setItem(`allRows-${groupId}`, row.outerHTML);
        });
      }
    }
  });
  groupOth2.forEach((groupId) => {
    if (groupId !== row.id) {
      const otherRow = document.getElementById(groupId);
      if (otherRow && groupOth2.includes(row.id)) {
        const checkboxesInOtherRow = Array.from(
          otherRow.querySelectorAll('input[type="checkbox"]')
        );
        checkboxesInOtherRow.forEach((otherCheckbox, checkboxIndex) => {
          // Store the current state of the checkbox
          const isCheckedBeforeChange = otherCheckbox.checked;
          // Change the state of the checkbox
          otherCheckbox.checked = false;
          // Update local storage based on the original state of the checkbox
          const localStorageKey = `Oth-row-${groupId}-checkbox-value-${checkboxIndex}`;
          const localStorageKey2 = `Oth-row-${groupId}-checkbox-${checkboxIndex}`;
          if (isCheckedBeforeChange) {
            localStorage.removeItem(localStorageKey);
            localStorage.removeItem(localStorageKey2);
            toggleSvgDisplay(otherCheckbox, rowIndex);
          }
          saveRowsWithCheckboxesToLocalStorage();

          localStorage.setItem(`allRows-${groupId}`, row.outerHTML);
        });
      }
    }
  });

  checkboxesInRow.forEach((checkbox, checkboxIndex) => {
    checkbox.checked = clickedCheckbox.checked;
    const localStorageKey = `Oth-row-${row.id}-checkbox-value-${checkboxIndex}`;

    if (checkbox.checked) {
      localStorage.setItem(localStorageKey, checkbox.value);
      localStorage.removeItem(`unCheckRows-${row.id}`);
      localStorage.setItem(`CheckRows-${row.id}`, row.outerHTML);

    } else {
      localStorage.removeItem(localStorageKey);
      localStorage.setItem(`unCheckRows-${row.id}`, row.outerHTML);
      localStorage.removeItem(`CheckRows-${row.id}`);
    }
    localStorage.setItem(
      `Oth-row-${row.id}-checkbox-${checkboxIndex}`,
      checkbox.checked
    );
    toggleSvgDisplay(checkbox, rowIndex);
  });
  saveRowsWithCheckboxesToLocalStorage();

  updateRowRefsBasedOnCheckboxState();
  updateColumnSums();
};
const unSelctAll = () => {
   rows.value.forEach((row, rowIndex) => {
    const checkboxesInRow = Array.from(
      row.querySelectorAll('input[type="checkbox"]')
    );

    checkboxesInRow.forEach((checkbox, checkboxIndex) => {
      const localStorageKey = `Oth-row-${row.id}-checkbox-value-${checkboxIndex}`;
      checkbox.checked =

      localStorage.setItem(`unCheckRows-${row.id}`, row.outerHTML);
        localStorage.removeItem(`Oth-row-${row.id}-checkbox-${checkboxIndex}`);
         localStorage.removeItem(localStorageKey);
          localStorage.removeItem(`CheckRows-${row.id}`);
         toggleSvgDisplay(checkbox, rowIndex);
         updateColumnSums();
    });
  });

 
};
const toggleSvgDisplay = (checkbox, rowIndex) => {
  const label = checkbox.nextElementSibling;

  if (checkbox.checked) {
    label.classList.add("show-svg");
  } else {
    label.classList.remove("show-svg");
  }
};

const updateRowRefsBasedOnCheckboxState = () => {
  checkedRows.value = rows.value.filter((row, rowIndex) => {
    const checkboxesInRow = Array.from(
      row.querySelectorAll('input[type="checkbox"]')
    );
    return checkboxesInRow.some((checkbox) => checkbox.checked);
  });

  uncheckedRows.value = rows.value.filter((row, rowIndex) => {
    const checkboxesInRow = Array.from(
      row.querySelectorAll('input[type="checkbox"]')
    );
    return !checkboxesInRow.some((checkbox) => checkbox.checked);
  });
};

const percentageFrom80 = computed(() => {
  return (totalSum.value / 56) * 100;
});
const percentageFrom24 = computed(() => {
  return (columnSums.value[0] / 17) * 100;
});
const percentageFrom19 = computed(() => {
  return (columnSums.value[1] / 15) * 100;
});
const percentageFrom10 = computed(() => {
  return (columnSums.value[2] / 4) * 100;
});
const percentageFrom27 = computed(() => {
  return (columnSums.value[3] / 20) * 100;
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
        key.startsWith(`Oth-row-`) &&
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
    localStorage.setItem(`Oth-columnSum-${columnIndex}`, sum.toString());
  }
};
const checkedCheckbox = ref(null);

// Get all the checkboxes
const checkboxes = document.querySelectorAll(
  'tr[id^="Oth-"] input[type="checkbox"][name="ahosting"]'
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
    localStorage.setItem("Oth-columnSum-percentage-0", percentageFrom24.value);
    localStorage.setItem("Oth-columnSum-percentage-1", percentageFrom19.value);
    localStorage.setItem("Oth-columnSum-percentage-2", percentageFrom10.value);
    localStorage.setItem("Oth-columnSum-percentage-3", percentageFrom27.value);
    localStorage.setItem("Oth-columnSum-percentage-total", percentageFrom80.value);
  },
  { deep: true }
);


setInterval(updateColumnSums, 3000);

</script>
<style>
svg {
  display: none;
  /* Hide SVG by default */
}

.show-svg svg {
  display: block;
  /* Display SVG when the checkbox is checked */
}

@media print {
  .d-print-none {
    display: none !important;
  }

  .d-print {
    display: block !important;
  }
}

.listStyle {
  list-style-type: circle;
}
</style>
