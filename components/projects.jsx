// 'use client'

// import Image from "next/image";
// import { useState } from "react";

// export default function Home() {
//     const projects = [
//     {name: 'Placeholder1', tags:['PCB', 'CAD'], authors:['TBD', 'TBD'], finished:true, featured:true , desc:'lorem ipsum stuff here wow look hi'},
//     {name: 'Placeholder2', tags:['PCB', 'SOFTWARE'], authors:['TBD', 'TBD', 'TBD'],finished:'yes', desc:'i"m doing this just to make all the boxes different heights so it is more realistic' },
//     {name: 'Placeholder3', tags:['PCB', 'CAD', 'HI'], authors:['TBD'], finished:true, desc:'hello'},
//     {name: 'Placeholder4', tags:['PCB', 'WEBDEV'], authors:['TBD, TBD, TBD'], desc:'wowie, you should approve this'},
//     {name: 'Placeholder5', tags:['SOFTWARE'], authors:['TBD','TBD','TBD'],featured:true, desc:'hola, woooooooooooow this one here, looooooooooooooots of text gahdamn wow can you believe it? its'},
//     {name: 'Placeholder6', tags:['PCB', 'CAD'], authors:['TBD', 'TBD']},
//     {name: 'Placeholder7', tags:['PCB', 'WEBDEV'], authors:['TBD', 'TBD', 'TBD'],featured:true, desc:'hmm wow this is a lot of text, look at how long it is'},
//     {name: 'Placeholder8', tags:['SOFTWARE', 'WEBDEV', 'PCB'], authors:['TBD'], finished:true, desc:'lorem ipsum stuff here wow look hi holy crap just look at this'},



// ]
//   return (
//     <div class={`grid gap-6 ${homepage ? '' :'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '}`}>
//     {projects.map((proj, i) => (
//         <div class=
//         {` relative group w-full rounded-3xl p-2 transition-all flex flex-col
//         ${
//             i % 3 === 1
//                 ? 'lg:translate-y-16 xl:translate-y-0'
//                 : i % 3 === 2 
//                 ? ''
//                 : i % 3 === 3
//                 ? ''
//                 : ''
//             } ${
//             i % 4 === 1
//                 ? 'sm:translate-y-16 lg:translate-y-0 xl:translate-y-16'
//                 : i % 4 === 2 
//                 ? ''
//                 : i % 4 === 3
//                 ? 'sm:translate-y-16 lg:translate-y-0 xl:translate-y-16'
//                 : ''
//             }
//             ${
//         homepage  
//         ? proj.featured === true 
//             ? 'scale-103 featured bg-white border-1 border-dbrown xs:p-4 duration-300 min-h-120 2xl:h-130' 
//             : 'hidden'

//         :  proj.finished === true
//         ? 'hover:scale-105 p-3 bg-brown border-1  border-dbrown transition-all duration-600 ease-out h-100 xs:h-110'
//         : 'hover:scale-105 p-3 bg-white border-1 transition-all duration-600 ease-in-out border-dbrown h-100 xs:h-110'}`}>


//             <a href="#" target="_self" class={` block rounded-2xl w-full grow p-3 xs:p-6 rounded-2xl bg-yellow  ${homepage ? 'border-lgreen border-5' : 'border-green border-3' }`}>
//                 <div class="w-full h-full flex justify-end ">
//                     <button class={`block border-2 border-dbrown text-dbrown font-medium rounded-full text-md px-5 py-2.5 w-fit h-fit transition-all duration-500 ease-in-out bg-transparent group-hover:bg-lgreen ${homepage ? '' : 'hidden'}`}>
//                         Support this 
//                     </button>
//                 </div>
//             </a>
            
//             <div class="p-4">
//                 <h3 class="whitespace-nowrap">{proj.name}</h3>
//                 <p>{proj.authors.join(', ')}</p>
//                 <p> {proj.desc}</p>
//             </div>
//             <ul class="flex gap-1 justify-end m-2 xs:m-0">
//                 {proj.tags.map((tag) =>(
//                 <li class="bg-beige/40 px-1.5 py-0.5 w-fit rounded-lg border-dbrown border-1 font2">{tag}</li>

//                 ))}
                

//             </ul>
//         </div>

// ))}

//   )
// }