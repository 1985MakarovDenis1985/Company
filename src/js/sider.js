import {Data} from "./modules_for_slider/data";
let blocks = new Data();
blocks=blocks.getSlide();

import {Build} from "./modules_for_slider/build";
let build = new Build();

import {RemoveClass} from "./modules_for_slider/removeClass";
let remove= new RemoveClass();

import {CreateClasses} from "./modules_for_slider/createSlide";
let createCl = new CreateClasses();

let current = Math.ceil(blocks.length/2);
console.log(current)


let main_container_our_works = document.getElementById("main_container_our_works")

for (let i=0; i<blocks.length; i++){
    let sliderItem = build.createNewElement("div", "sliderItem", i, [{"name":"id", "value":i}]);
    main_container_our_works.appendChild(sliderItem)
}



let arrSlider = document.getElementsByClassName("sliderItem")
arrSlider = Array.from(arrSlider);
for (let i=0; i<blocks.length; i++){
    arrSlider[i].classList.add("sl"+i);
}

createCl.createClasses(arrSlider,current,blocks);


// ARROWS

let arrArrows = document.getElementsByClassName("arrows");
arrArrows = Array.from(arrArrows);

arrArrows.map((el)=>{
    el.addEventListener("click", (e)=>{
        if (el.id == "arrowL"){
            current = current-1;
            console.log("current "+current);
            if (current == -1){
                current = arrSlider.length-1
            }
            createCl.change(current, arrArrows, arrSlider)
        }

        if (el.id == "arrowR"){
            current = current+1
            console.log("current "+current)
            if (current > arrSlider.length-1){
                current = 0
            }
            createCl.change(current, arrArrows, arrSlider)
        }
    })
});

