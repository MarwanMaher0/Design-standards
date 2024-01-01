<template>
<table>

    <tr id="Ext-row-1">
        <td class="bg-[#2f5496] text-gray-100" rowspan='48' colspan='1'><p class="-rotate-90 text-3xl">  {{ $t('External Spaces (Layout) ')}}</p> </td>
        <td rowspan='42' colspan='2'><span class='mobile-head'></span>{{ $t('Design Criteria for Layout ')}}</td>
        <td class='show-on-mobile'><span class='mobile-head'>Head3</span>row1 column2</td>
        <td rowspan='13' colspan='1'><span class='mobile-head'></span>{{ $t('Site Slection (Safety and Security Requirements)')}} </td>
        <td rowspan='3' colspan='1'><span class='mobile-head'></span>{{ $t('Fire Protection ') }}</td>
        <td rowspan='3' colspan='2'><span class='mobile-head'></span>{{ $t(':Keep away Fire Resources, such as ') }}</td>
        <td class='show-on-mobile'><span class='mobile-head'></span>row1 column6</td>
        <td><span class='mobile-head'></span>{{ $t('Gas Stations ') }}</td>
        <td>row1 column9</td>
        <td class=bg-red-300><input type="checkbox" id="External-row-1" name="ahosting" value="1" class="hidden  peer " required>
            <label for="External-row-1" class=" inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
            <td>
    <input type="checkbox" id="External-row-1" name="ahosting" value="1" class="hidden peer" required ref="checkboxRef">
    <label for="External-row-1" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200  border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 show-svg">
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
        </svg>
    </label>
</td>
        <td><input disabled type="checkbox" id="External-row-1" name="ahosting" value="" class="hidden  " required>
            <label for="External-row-1" class="inline-flex  text-center items-center justify-center w-full h-full p-5 text-gray-500  border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600  dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">

            </label>
        </td>
        <td><input type="checkbox" id="External-row-1" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-1" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>75%</td>
    </tr>
    <tr id="Ext-row-2">

        <td><span class='mobile-head'></span>{{ $t('Forests ') }}</td>
        <td>row2 column9</td>
        <td class="p-0  bg-white">
            <input type="checkbox" id="External-row-2" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-2" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td> <input type="checkbox" id="External-row-2" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-2" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td><input disabled type="checkbox" id="External-row-2" name="ahosting" value=" " class="hidden  " required>
            <label for="External-row-2" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500  border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600  dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
               
            </label></td>
        <td><input type="checkbox" id="External-row-2" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-2" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>75%</td>
    </tr>
    <tr id="Ext-row-3">

        <td><span class='mobile-head'></span>{{ $t('Burning kilns ') }}</td>
        <td>row3 column9</td>
        <td>      <input type="checkbox" id="External-row-3" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-3" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>    <input type="checkbox" id="External-row-3" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-3" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td> <input disabled type="checkbox" id="External-row-3" name="ahosting" value="" class="hidden  " required>
            <label for="External-row-3" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600  dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                
            </label></td>
        <td> <input type="checkbox" id="External-row-3" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-3" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row3 column14</td>
    </tr>
    <tr id="Ext-row-4" >

        <td rowspan='4' colspan='1'><span class='mobile-head'></span>{{ $t('Protection from Environmental Pollution (Sound-Visual) ') }}</td>
        <td rowspan='1' colspan='3'><span class='mobile-head'></span>{{ $t('Cement Factories ')}}</td>
        <td class='show-on-mobile'><span class='mobile-head'></span>row4 column6</td>
        <td class='show-on-mobile'><span class='mobile-head'></span>row4 column6</td>
        <td>row4 column9</td>
        <td> <input type="checkbox" id="External-row-4" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-4" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td> <input type="checkbox" id="External-row-4" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-4" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td> <input disabled type="checkbox" id="External-row-4" name="ahosting" value="" class="hidden  " required>
            <label for="External-row-4" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500  border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600  dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                           </label></td>
        <td> <input type="checkbox" id="External-row-4" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-4" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row4 column14</td>
    </tr>
    <tr id="Ext-row-5">

        <td rowspan='1' colspan='3'><span class='mobile-head'></span>{{ $t('Petroleum Products Factories ') }}</td>

        <td>row5 column9</td>
        <td>row5 <input type="checkbox" id="External-row-5" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-5" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row5 <input type="checkbox" id="External-row-5" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-5" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row5 <input disabled type="checkbox" id="External-row-5" name="ahosting" value="" class="hidden peer " required>
            <label for="External-row-5" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row5 <input type="checkbox" id="External-row-5" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-5" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row5 column14</td>
    </tr>
    <tr id="Ext-row-6">

        <td rowspan='1' colspan='3'><span class='mobile-head'></span>{{ $t('Quarries ') }}</td>

        <td>row6 column9</td>
        <td>row6 <input type="checkbox" id="External-row-6" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-6" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row6 <input type="checkbox" id="External-row-6" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-6" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row6 <input disabled type="checkbox" id="External-row-6" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-6" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row6 <input type="checkbox" id="External-row-6" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-6" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row6 column14</td>
    </tr>
    <tr id="Ext-row-7">

        <td rowspan='1' colspan='3'><span class='mobile-head'></span>{{ $t('Cemeteries ') }}</td>

        <td>row7 column9</td>
        <td>row7 <input type="checkbox" id="External-row-7" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-7" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row7 <input type="checkbox" id="External-row-7" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-7" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row7 <input disabled type="checkbox" id="External-row-7" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-7" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row7 <input type="checkbox" id="External-row-7" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-7" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row7 column14</td>
    </tr>
      <tr id="Ext-row-8">

        <td rowspan='6' colspan='1'><span class='mobile-head'></span>{{ $t(' Access to the site ') }}</td>
        <td rowspan='3' colspan='2'><span class='mobile-head'></span>{{ $t(':keep away obstacles or barriers, such as ') }}</td>

        <td><span class='mobile-head'></span>{{ $t('Railway lines ') }}</td>
        <td>row8 column9</td>
        <td>row8 <input type="checkbox" id="External-row-8" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-8" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row8 <input type="checkbox" id="External-row-8" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-8" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row8 <input disabled type="checkbox" id="External-row-8" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-8" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row8 <input type="checkbox" id="External-row-8" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-8" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row8 column14</td>
    </tr>
      <tr id="Ext-row-9">

        <td><span class='mobile-head'></span>{{ $t('High voltage power lines ') }}</td>
        <td>row9 column9</td>
        <td>row9 <input type="checkbox" id="External-row-9" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-9" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row9 <input type="checkbox" id="External-row-9" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-9" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row9 <input disabled type="checkbox" id="External-row-9" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-9" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row9 <input type="checkbox" id="External-row-9" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-9" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row9 column14</td>
    </tr>
      <tr id="Ext-row-10">

        <td><span class='mobile-head'></span>{{ $t('Rivers and Drains ') }}</td>
        <td>row10 column9</td>
        <td>row10 <input type="checkbox" id="External-row-10" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-10" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row10 <input type="checkbox" id="External-row-10" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-10" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row10 <input disabled type="checkbox" id="External-row-10" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-10" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row10 <input type="checkbox" id="External-row-10" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-10" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row10 column14</td>
    </tr>
      <tr id="Ext-row-11">

        <td rowspan='1' colspan='2'><span class='mobile-head'></span>{{ $t('Roads ') }}</td>
        <td class='show-on-mobile'><span class='mobile-head'></span>row11 column6</td>
        <td><span class='mobile-head'></span>{{ $t('keep away from High Roads ') }}</td>
        <td>row11 column9</td>
        <td>row11 <input type="checkbox" id="External-row-11" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-11" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row11 <input type="checkbox" id="External-row-11" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-11" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row11 <input disabled type="checkbox" id="External-row-11" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-11" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row11 <input type="checkbox" id="External-row-11" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-11" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row11 column14</td>
    </tr>
      <tr id="Ext-row-12">

        <td rowspan='2' colspan='2'><span class='mobile-head'></span>{{ $t('Entrances ') }}</td>
        <td class='show-on-mobile'><span class='mobile-head'></span>row12 column6</td>
        <td><span class='mobile-head'></span>{{ $t('Student Entrances  From Side Roads (6m) ') }}</td>
        <td>row12 column9</td>
        <td>row12 <input type="checkbox" id="External-row-12" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-12" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row12 <input type="checkbox" id="External-row-12" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-12" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row12 <input disabled type="checkbox" id="External-row-12" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-12" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row12 <input type="checkbox" id="External-row-12" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-12" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row12 column14</td>
    </tr>
      <tr id="Ext-row-13">

        <td><span class='mobile-head'></span>{{ $t('The Entrance is Perpendicular to The External Roads ') }}</td>
        <td>row13 column9</td>
        <td>row13 <input type="checkbox" id="External-row-13" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-13" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row13 <input type="checkbox" id="External-row-13" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-13" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row13 <input disabled type="checkbox" id="External-row-13" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-13" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row13 <input type="checkbox" id="External-row-13" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-13" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row13 column14</td>
    </tr>
      <tr id="Ext-row-14">

        <td rowspan='1' colspan='11'><span class='mobile-head'></span></td>

    </tr>
      <tr id="Ext-row-15">

        <td rowspan='16' colspan='1'><span class='mobile-head'></span>{{ $t('Requirements for Designing Outdoor Educational Spaces: ') }}</td>
        <td rowspan='6' colspan='1'><span class='mobile-head'></span>{{ $t('Floor ') }}</td>
        <td rowspan='3' colspan='1'><span class='mobile-head'></span>{{ $t('Industrial Materials ') }}</td>
        <td rowspan='1' colspan='2'><span class='mobile-head'></span>{{ $t('Stamped fair faced concrete ') }}</td>
        <td>row15 column9</td>
        <td>row15 <input type="checkbox" id="External-row-15" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-15" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row15 <input type="checkbox" id="External-row-15" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-15" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row15 <input disabled type="checkbox" id="External-row-15" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-15" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row15 <input type="checkbox" id="External-row-15" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-15" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row15 column14</td>
    </tr>
      <tr id="Ext-row-16">

        <td rowspan='1' colspan='2'><span class='mobile-head'></span>{{ $t('Artificial Grass ') }}</td>
        <td>row16 column9</td>
        <td>row16 <input type="checkbox" id="External-row-16" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-16" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row16 <input type="checkbox" id="External-row-16" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-16" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row16 <input disabled type="checkbox" id="External-row-16" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-16" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row16 <input type="checkbox" id="External-row-16" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-16" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row16 column14</td>
    </tr>
      <tr id="Ext-row-17">

        <td rowspan='1' colspan='2'><span class='mobile-head'></span>{{ $t('Tilings ') }}</td>
        <td class='show-on-mobile'><span class='mobile-head'></span>row17 column7</td>
        <td>row17 column9</td>
        <td>row17 <input type="checkbox" id="External-row-17" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-17" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row17 <input type="checkbox" id="External-row-17" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-17" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row17 <input disabled type="checkbox" id="External-row-17" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-17" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row17 <input type="checkbox" id="External-row-17" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-17" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row17 column14</td>
    </tr>
      <tr id="Ext-row-18">

        <td rowspan='3' colspan='1'><span class='mobile-head'></span>{{ $t('Natural Materials ') }}</td>
        <td rowspan='1' colspan='2'><span class='mobile-head'></span>{{ $t('Sand  ') }}</td>
        <td>row18 column9</td>
        <td>row18 <input type="checkbox" id="External-row-18" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-18" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row18 <input type="checkbox" id="External-row-18" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-18" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row18 <input disabled type="checkbox" id="External-row-18" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-18" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row18 <input type="checkbox" id="External-row-18" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-18" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row18 column14</td>
    </tr>
      <tr id="Ext-row-19">

        <td rowspan='1' colspan='2'><span class='mobile-head'></span>{{ $t('Marble ') }}</td>
        <td class='show-on-mobile'><span class='mobile-head'></span>row19 column7</td>
        <td>row19 column9</td>
        <td>row19 <input type="checkbox" id="External-row-19" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-19" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row19 <input type="checkbox" id="External-row-19" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-19" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row19 <input disabled type="checkbox" id="External-row-19" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-19" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row19 <input type="checkbox" id="External-row-19" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-19" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row19 column14</td>
    </tr>
      <tr id="Ext-row-20">

        <td rowspan='1' colspan='2'><span class='mobile-head'></span>{{ $t('Stones ') }}</td>
        <td>row20 column9</td>
        <td>row20 <input type="checkbox" id="External-row-20" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-20" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row20 <input type="checkbox" id="External-row-20" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-20" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row20 <input disabled type="checkbox" id="External-row-20" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-20" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row20 <input type="checkbox" id="External-row-20" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-20" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row20 column14</td>
    </tr>
      <tr id="Ext-row-21">

        <td rowspan='3' colspan='1'><span class='mobile-head'></span>{{ $t('Ceiling ') }}</td>
        <td rowspan='1' colspan='3'><span class='mobile-head'></span>{{ $t('Totally Shaded') }}</td>

        <td>row21 column9</td>
        <td>row21 <input type="checkbox" id="External-row-21" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-21" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row21 <input type="checkbox" id="External-row-21" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-21" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row21 <input disabled type="checkbox" id="External-row-21" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-21" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row21 <input type="checkbox" id="External-row-21" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-21" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row21 column14</td>
    </tr>
      <tr id="Ext-row-22">

        <td rowspan='1' colspan='3'><span class='mobile-head'></span>{{ $t('Semi-shaded ') }}</td>

        <td>row22 column9</td>
        <td>row22 <input type="checkbox" id="External-row-22" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-22" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row22 <input type="checkbox" id="External-row-22" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-22" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row22 <input disabled type="checkbox" id="External-row-22" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-22" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row22 <input type="checkbox" id="External-row-22" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-22" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row22 column14</td>
    </tr>
      <tr id="Ext-row-23">

        <td rowspan='1' colspan='3'><span class='mobile-head'></span>{{ $t('Totally EExposed to The Sun ') }}</td>

        <td>row23 column9</td>
        <td>row23 <input type="checkbox" id="External-row-23" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-23" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row23 <input type="checkbox" id="External-row-23" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-23" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row23 <input disabled type="checkbox" id="External-row-23" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-23" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row23 <input type="checkbox" id="External-row-23" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-23" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row23 column14</td>
    </tr>
      <tr id="Ext-row-24">

        <td rowspan='2' colspan='1'><span class='mobile-head'></span>{{ $t('Barrier ') }}</td>
        <td rowspan='1' colspan='3'><span class='mobile-head'></span>{{ $t('Buildings & Hard Fences ') }}</td>

        <td>row24 column9</td>
        <td>row24 <input type="checkbox" id="External-row-24" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-24" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row24 <input type="checkbox" id="External-row-24" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-24" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row24 <input disabled type="checkbox" id="External-row-24" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-24" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row24 <input type="checkbox" id="External-row-24" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-24" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row24 column14</td>
    </tr>
      <tr id="Ext-row-25">

        <td rowspan='1' colspan='3'><span class='mobile-head'></span>{{ $t('Trees & Soft Fences ') }}</td>

        <td>row25 column9</td>
        <td>row25 <input type="checkbox" id="External-row-25" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-25" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row25 <input type="checkbox" id="External-row-25" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-25" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row25 <input disabled type="checkbox" id="External-row-25" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-25" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row25 <input type="checkbox" id="External-row-25" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-25" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row25 column14</td>
    </tr>
      <tr id="Ext-row-26">

        <td rowspan='2' colspan='1'><span class='mobile-head'></span>{{ $t('The form ') }}</td>
        <td rowspan='1' colspan='2'><span class='mobile-head'></span>{{ $t('Geometric Form ') }}</td>
        <td rowspan='2' colspan='1'><span class='mobile-head'></span>{{ $t('Select one Form ') }}</td>
        <td>row26 column9</td>
        <td>row26 <input type="checkbox" id="External-row-26" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-26" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row26 <input type="checkbox" id="External-row-26" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-26" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row26 <input disabled type="checkbox" id="External-row-26" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-26" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row26 <input type="checkbox" id="External-row-26" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-26" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row26 column14</td>
    </tr>
      <tr id="Ext-row-27">

        <td rowspan='1' colspan='2'><span class='mobile-head'></span>{{ $t('Organic Form ') }}</td>

        <td>row27 column9</td>
        <td>row27 <input type="checkbox" id="External-row-27" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-27" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row27 <input type="checkbox" id="External-row-27" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-27" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row27 <input disabled type="checkbox" id="External-row-27" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-27" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row27 <input type="checkbox" id="External-row-27" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-27" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row27 column14</td>
    </tr>
      <tr id="Ext-row-28">

        <td rowspan='3' colspan='1'><span class='mobile-head'></span>{{ $t('Furniture ') }}</td>
        <td rowspan='1' colspan='3'><span class='mobile-head'></span>{{ $t('Play Areas - Playgrounds ') }}</td>

        <td>row28 column9</td>
        <td>row28 <input type="checkbox" id="External-row-28" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-28" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row28 <input type="checkbox" id="External-row-28" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-28" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row28 <input disabled type="checkbox" id="External-row-28" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-28" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row28 <input type="checkbox" id="External-row-28" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-28" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row28 column14</td>
    </tr>
      <tr id="Ext-row-29">

        <td rowspan='1' colspan='3'><span class='mobile-head'></span>{{ $t('Gathering Places for Students ') }}</td>

        <td>row29 column9</td>
        <td>row29 <input type="checkbox" id="External-row-29" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-29" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row29 <input type="checkbox" id="External-row-29" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-29" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row29 <input disabled type="checkbox" id="External-row-29" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-29" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row29 <input type="checkbox" id="External-row-29" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-29" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row29 column14</td>
    </tr>
      <tr id="Ext-row-30">

        <td rowspan='1' colspan='3'><span class='mobile-head'></span>{{ $t('Sitting Areas ') }}</td>

        <td>row30 column9</td>
        <td>row30 <input type="checkbox" id="External-row-30" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-30" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row30 <input type="checkbox" id="External-row-30" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-30" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row30 <input disabled type="checkbox" id="External-row-30" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-30" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row30 <input type="checkbox" id="External-row-30" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-30" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row30 column14</td>
    </tr>
      <tr id="Ext-row-31">

        <td rowspan='1' colspan='11'><span class='mobile-head'></span></td>

    </tr>
      <tr id="Ext-row-32">

        <td rowspan='6' colspan='1'><span class='mobile-head'></span>{{ $t('Building Form ') }}</td>
        <td rowspan='1' colspan='3'><span class='mobile-head'></span>{{ $t('Linear Type ') }}</td>

        <td rowspan='6' colspan='1'><span class='mobile-head'></span>{{ $t('Choose one Type ') }}</td>
        <td>row32 column9</td>
        <td>row32 <input  type="checkbox" id="External-row-32" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-32" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row32 <input type="checkbox" id="External-row-32" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-32" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row32 <input disabled type="checkbox" id="External-row-32" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-32" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row32 <input type="checkbox" id="External-row-32" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-32" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row32 column14</td>
    </tr>
      <tr id="Ext-row-33">

        <td rowspan='1' colspan='3'><span class='mobile-head'></span>{{ $t('Finger Type ') }}</td>

        <td>row33 column9</td>
        <td>row33 <input type="checkbox" id="External-row-33" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-33" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row33 <input type="checkbox" id="External-row-33" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-33" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row33 <input disabled type="checkbox" id="External-row-33" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-33" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row33 <input type="checkbox" id="External-row-33" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-33" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row33 column14</td>
    </tr>
      <tr id="Ext-row-34">

        <td rowspan='1' colspan='3'><span class='mobile-head'></span>{{ $t('Single court Type ') }}</td>

        <td>row34 column9</td>
        <td>row34 <input type="checkbox" id="External-row-34" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-34" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row34 <input type="checkbox" id="External-row-34" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-34" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row34 <input disabled type="checkbox" id="External-row-34" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-34" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row34 <input type="checkbox" id="External-row-34" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-34" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row34 column14</td>
    </tr>
      <tr id="Ext-row-35">

        <td rowspan='1' colspan='3'><span class='mobile-head'></span>{{ $t('Multi- court type ') }}</td>

        <td>row35 column9</td>
        <td>row35 <input type="checkbox" id="External-row-35" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-35" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row35 <input type="checkbox" id="External-row-35" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-35" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row35 <input disabled type="checkbox" id="External-row-35" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-35" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row35 <input type="checkbox" id="External-row-35" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-35" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row35 column14</td>
    </tr>
      <tr id="Ext-row-36">

        <td rowspan='2' colspan='1'><span class='mobile-head'></span>{{ $t('Other Types ') }}</td>
        <td rowspan='1' colspan='2'><span class='mobile-head'></span>{{ $t('L-Type ') }}</td>

        <td>row36 column9</td>
        <td>row36 <input type="checkbox" id="External-row-36" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-36" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row36 <input type="checkbox" id="External-row-36" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-36" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row36 <input disabled type="checkbox" id="External-row-36" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-36" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row36 <input type="checkbox" id="External-row-36" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-36" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row36 column14</td>
    </tr>
      <tr id="Ext-row-37">

        <td rowspan='1' colspan='2'><span class='mobile-head'></span>{{ $t('U- Type ') }}</td>

        <td>row37 column9</td>
        <td>row37 <input type="checkbox" id="External-row-37" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-37" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row37 <input type="checkbox" id="External-row-37" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-37" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row37 <input disabled type="checkbox" id="External-row-37" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-37" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row37 <input type="checkbox" id="External-row-37" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-37" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row37 column14</td>
    </tr>
      <tr id="Ext-row-38">

        <td rowspan='1' colspan='11'><span class='mobile-head'></span></td>

    </tr>
      <tr id="Ext-row-39">

        <td><span class='mobile-head'></span>{{ $t('student area in outdoor space ') }}</td>
        <td rowspan='1' colspan='4'><span class='mobile-head'></span>{{ $t('From (4)m2 to (7) m2 ') }}</td>

        <td>row39 column9</td>
        <td>row39 <input type="checkbox" id="External-row-39" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-39" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row39 <input type="checkbox" id="External-row-39" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-39" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row39 <input disabled type="checkbox" id="External-row-39" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-39" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row39 <input type="checkbox" id="External-row-39" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-39" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row39 column14</td>
    </tr>
      <tr id="Ext-row-40">

        <td rowspan='1' colspan='11'><span class='mobile-head'></span></td>

    </tr>
      <tr id="Ext-row-41">

        <td rowspan='2' colspan='1'><span class='mobile-head'></span>{{ $t('Precautionary measures for outdoor spaces (Layout) ') }}</td>
        <td rowspan='1' colspan='4'><span class='mobile-head'></span>{{ $t('Using lightweight Structures to Create Outdoor Educational Spaces  ') }}</td>

        <td>row41 column9</td>
        <td>row41 <input type="checkbox" id="External-row-41" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-41" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row41 <input type="checkbox" id="External-row-41" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-41" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row41 <input disabled type="checkbox" id="External-row-41" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-41" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row41 <input type="checkbox" id="External-row-40" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-40" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row41 column14</td>
    </tr>
      <tr id="Ext-row-42">

        <td  rowspan='1' colspan='4'><span class='mobile-head'></span>{{ $t('Organizing Entry to The School with Social Distancing ') }}</td>

        <td>row42 column9</td>
        <td>row42 <input  @click="calculateColumnSum" type="checkbox" id="External-row-42" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-42" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-red-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#c00000] peer-checked:border-[#c00000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-red-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row42 <input type="checkbox" id="External-row-42" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-42" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-yellow-200 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#ffc000] peer-checked:border-[#ffc000] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-yellow-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row42 <input disabled type="checkbox" id="External-row-42" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-42" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-green-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#548135] peer-checked:border-[#548135] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-green-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row42 <input type="checkbox" id="External-row-42" name="ahosting" value="1" class="hidden peer " required>
            <label for="External-row-42" class="inline-flex text-center items-center justify-center w-full h-full p-5 text-gray-500 bg-blue-300 border border-gray-200  cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-[#0070c0] peer-checked:border-[#0070c0] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-blue-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" /></svg>

            </label></td>
        <td>row42 column14</td>
    </tr>
      <tr id="Ext-row-43" class="bg-[#8eaadb] ">
        <td class="bg-[#8eaadb] " rowspan='1' colspan='7'><span class='mobile-head'></span>{{ $t('No. of Realized Points for Resilient Design Criteria in layout') }}</td>

        <td>row43 column9</td>
        <td>{{ columnSums[0] }} </td>
<td>{{ columnSums[1] }} </td>
<td>{{ columnSums[2] }} </td>
<td>{{ columnSums[3] }} </td>

        <td>row43 column14</td>
    </tr>
      <tr id="Ext-row-44" class="bg-[#8eaadb]">
        <td class="bg-[#8eaadb] " rowspan='1' colspan='7'><span class='mobile-head'></span>{{ $t('Total No. of Realized Points for Resilient Design Criteria in layout') }}</td>

        <td>row44 column9</td>
        <td rowspan="1" colspan="4" >{{ totalSum }}</td>

        <td>row44 column14</td>
    </tr>
      <tr id="Ext-row-44" class="bg-[#8eaadb]">
        <td class="bg-[#8eaadb] " rowspan='1' colspan='7'><span class='mobile-head'></span>{{ $t('Percentages of Realized Points for Resilient Design Criteria in layout ') }}</td>

        <td>row45 column9</td>
        <td>{{ percentageFrom24.toFixed(2) }}% </td>
        <td>{{ percentageFrom19.toFixed(2) }}% </td>
        <td>{{ percentageFrom10.toFixed(2) }}% </td>
        <td>{{ percentageFrom27.toFixed(2) }}% </td>
        <td>row45 column14</td>
    </tr>
      <tr id="Ext-row-45" class="bg-[#8eaadb]">
        <td class="bg-[#8eaadb] " rowspan='1' colspan='7'><span class='mobile-head'></span>{{ $t('Total Percentages of Realized Points for Resilient Design Criteria in layout  ') }}</td>

        <td>row46 column9</td>

        <td rowspan="1" colspan="4"> {{ percentageFrom80.toFixed(2) }}%</td>


        <td>row46 column14</td>
    </tr>
      <tr id="Ext-row-46 " class="bg-[#b4c6e7] ">
        <td class="bg-[#b4c6e7] " rowspan='1' colspan='7'><span class='mobile-head'></span>{{ $t('Required Points for Resilient Design Criteria in layout  ') }}</td>

        <td>row47 column9</td>
        <td>24 </td>
        <td>19 </td>
        <td>10 </td>
        <td>27 </td>
        <td>row47 column14</td>
    </tr>
      <tr id="Ext-row-47" class="bg-[#b4c6e7] ">
        <td class="bg-[#b4c6e7] " rowspan='1' colspan='7'><span class='mobile-head'></span>{{ $t('Total Required Points for Resilient Design Criteria in layout ') }}</td>

        <td>row48 column9</td>
        <td rowspan="1" colspan="4">80</td>
        <td>row48 column14</td>
    </tr>
</table>
<div class="block">

    <div class=" flex justify-center items-center text-center">
    
        <chart  class="w-[400px] my-10 text-center"  />
    
    </div>
</div>

</template>
<script setup>
import { ref, onMounted, computed  } from 'vue';
import chart from "../components/chart.vue"


// Watch for changes in columnSums and emit them

onMounted(() => {
    rows.value = Array.from(document.querySelectorAll('tr'));
    initializeCheckboxes();
    updateColumnSums();
});

let rows = ref([]);
let checkedRows = ref([]);
let uncheckedRows = ref([]);
let checkedCheckboxes = ref([]);
let uncheckedCheckboxes = ref([]);
let getColumnSum0 = computed(() => calculateColumnSum(0));
let getColumnSum1 = computed(() => calculateColumnSum(1));
let getColumnSum2 = computed(() => calculateColumnSum(2));
let getColumnSum3 = computed(() => calculateColumnSum(3));

const initializeCheckboxes = () => {
    rows.value.forEach((row, rowIndex) => {
        const checkboxesInRow = Array.from(row.querySelectorAll('input[type="checkbox"]'));

        checkboxesInRow.forEach((checkbox, checkboxIndex) => {
            checkbox.checked = localStorage.getItem(`row-${rowIndex}-checkbox-${checkboxIndex}`) === 'true';
            checkbox.addEventListener('change', (event) => handleCheckboxChange(event, rowIndex));
            toggleSvgDisplay(checkbox, rowIndex);

            if (checkbox.checked) {
                checkedCheckboxes.value.push(checkbox);
            } else {
                uncheckedCheckboxes.value.push(checkbox);
            }
        });
    });

    updateRowRefsBasedOnCheckboxState();
};
const toggleSvgDisplay = (checkbox, rowIndex) => {
    const label = checkbox.nextElementSibling;
    if (checkbox.checked) {
        label.classList.add('show-svg');
    } else {
        label.classList.remove('show-svg');
    }
};
const updateRowRefsBasedOnCheckboxState = () => {
    checkedRows.value = rows.value.filter((row, rowIndex) => {
        const checkboxesInRow = Array.from(row.querySelectorAll('input[type="checkbox"]'));
        return checkboxesInRow.some(checkbox => checkbox.checked);
    });

    uncheckedRows.value = rows.value.filter((row, rowIndex) => {
        const checkboxesInRow = Array.from(row.querySelectorAll('input[type="checkbox"]'));
        return !checkboxesInRow.some(checkbox => checkbox.checked);
    });
};

const calculateColumnSum = (columnIndex) => {
    let sum = 0;

    for (let key in localStorage) {
        if (key.startsWith(`row-`) && key.endsWith(`-checkbox-value-${columnIndex}`)) {
            const storedValue = localStorage.getItem(key);
            if (storedValue) {
                sum += parseFloat(storedValue);
            }
        }
    }

    return sum;
};



const handleCheckboxChange = (event, rowIndex) => {
    const clickedCheckbox = event.target;
    const row = clickedCheckbox.closest('tr');
    if (!row) return;

    const checkboxesInRow = Array.from(row.querySelectorAll('input[type="checkbox"]'));
    checkboxesInRow.forEach((checkbox, checkboxIndex) => {
        checkbox.checked = clickedCheckbox.checked;
        const localStorageKey = `row-${rowIndex}-checkbox-value-${checkboxIndex}`;
        if (checkbox.checked) {
            localStorage.setItem(localStorageKey, checkbox.value);
        } else {
            localStorage.removeItem(localStorageKey);
        }
        localStorage.setItem(`row-${rowIndex}-checkbox-${checkboxIndex}`, checkbox.checked);
        toggleSvgDisplay(checkbox, rowIndex);
    });

    updateRowRefsBasedOnCheckboxState();
    updateColumnSums();
};
let columnSums = ref({
    0: 0,
    1: 0,
    2: 0,
    3: 0
});

const percentageFrom80 = computed(() => {
    return (totalSum.value / 80) * 100;
});
const percentageFrom24 = computed(() => {
    return (columnSums.value[0] / 24) * 100;
});
const percentageFrom19 = computed(() => {
    return (columnSums.value[1] / 19) * 100;
});
const percentageFrom10 = computed(() => {
    return (columnSums.value[2]/ 10) * 100;
});
const percentageFrom27 = computed(() => {
    return (columnSums.value[3] / 27) * 100;
});
const totalSum = computed(() => {
    return columnSums.value[0] + columnSums.value[1] + columnSums.value[2] + columnSums.value[3];
});

const updateColumnSums = () => {
    for (let columnIndex = 0; columnIndex < 4; columnIndex++) {
        let sum = 0;

        for (let key in localStorage) {
            if (key.startsWith(`row-`) && key.endsWith(`-checkbox-value-${columnIndex}`)) {
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


</script>

<!-- Add this in the head of your HTML -->

<style>
svg {
    display: none; /* Hide SVG by default */
}

.show-svg svg {
    display: block; /* Display SVG when the checkbox is checked */
}

/* Basic responsive table styling */
table {
    width: 100%;
    border-collapse: collapse;
}

td,
th {
    border: 1px solid #ccc;
    /* padding: 8px; */
    text-align: center;
    align-content: center;
    height: 80%;
}

/* Media query for smaller devices */
@media (max-width: 768px) {
    table {
        display: block;
        overflow-x: auto;
        font-size: small;
    }

    /* Hide table headers (if needed) */
    thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
    }

    tr {
        margin-bottom: 15px;
    }

    td {
        border: none;
        position: relative;
        padding-left: 50%;
    }

    td:before {
        position: absolute;
        top: 6px;
        left: 6px;
        width: 45%;
        padding-right: 10px;
        white-space: nowrap;
    }

    /* For example: Show the label for each cell */
    /* td:nth-of-type(1):before { content: "External Spaces"; }
    td:nth-of-type(2):before { content: "Design Criteria"; } */
    /* ... Add more as needed */
}
</style>
