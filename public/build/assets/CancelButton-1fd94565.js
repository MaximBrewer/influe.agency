import{a}from"./app-c4d89a96.js";function i({className:n="",disabled:e,size:o="md",children:r,...s}){let t="inline-flex items-center bg-red-700 border border-transparent text-white transition ease-in-out duration-150";switch(o){case"sm":t+=" px-4 py-2.5 rounded-lg font-bold text-sm";case"wide":t+=" px-8 py-3 rounded-xl font-semibold text-lg";default:t+=" px-4 py-3 rounded-xl font-semibold text-lg"}return a("button",{...s,className:`${t} ${e&&"opacity-25"} `+n,disabled:e,children:r})}export{i as C};