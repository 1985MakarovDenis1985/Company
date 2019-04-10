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
            pagActive()
            console.log("current "+current);
            if (current == -1){
                current = arrSlider.length-1
                pagActive()
            }
        }
        if (el.id == "arrowR"){
            current = current + 1;
            pagActive()
            console.log("current "+current)
            if (current > arrSlider.length-1){
                current = 0;
                console.log("curE "+current)
                pagActive()
            }
        }
        console.log(current)
    });
    change(arrArrows)
});
// ARROWS

//// Slick sliders
function change(arrArrows){
    arrArrows.map((el)=>{
        el.addEventListener("click", (e)=>{
            if (current >=2 && current < arrSlider.length-2){
                remove.removeCl(arrSlider)
                createCl.createClasses(arrSlider,current)
            }
            if (current ==1){
                remove.removeCl(arrSlider)
                createCl.createLeftPosition(arrSlider,current)
            }
            if (current ==0){
                remove.removeCl(arrSlider)
                createCl.createLeftLeftPosition(arrSlider,current)
            }
            if (arrSlider.length>5 && current == arrSlider.length-1){
                remove.removeCl(arrSlider)
                createCl.createLastLeftPosition(arrSlider,current)
            }
            if (arrSlider.length>5 && current == arrSlider.length-2){
                remove.removeCl(arrSlider)
                createCl.createPreLastLeftPosition(arrSlider,current)
            }
        })
    });
};
//// Slick sliders

//// Pagination
let pagBlock = document.getElementById("pagination_block");

for (let i=0; i<blocks.length; i++){
    let pag = build.createNewElement("div", "pag", i, [{"name":"data-set", "value":i}])
    pagBlock.appendChild(pag)
}

let arrPag = Array.from(document.getElementsByClassName("pag"))

////=>

function pagActive(){
    for (let i=0; i<arrPag.length; i++){
        if(current == arrPag[i].dataset.set){
            arrPag[i].classList.add("active_pag")
        } else{
            arrPag[i].classList.remove("active_pag")
        }
    }
}

function pagClick(){
    arrPag.map((el)=>{
        el.addEventListener("click", (e)=>{

            console.log(el.dataset.set);
            current = Number(el.dataset.set);
            change(arrPag);
            pagActive();
            console.log(current)

        })
    });
}
//// Pagination




pagClick();
pagActive();
console.log(current);
console.log(arrPag);


