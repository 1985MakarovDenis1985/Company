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
                // current = arrSlider.length-1
            }
            // change()

        }
        if (el.id == "arrowR"){
            current = current+1
            console.log("current "+current)
            if (current > arrSlider.length-1){
                // current = 0
            }
            // change()

        }
        console.log(current)
    })
    change()
});


function change(){
    arrArrows.map((el)=>{
        el.addEventListener("click", (e)=>{
            // if (current == 0){
            //
            // }
            if (current >=2 && current < arrSlider.length-2){
                remove.removeCl(arrSlider)
                createCl.createClasses(arrSlider,current)
            }
            if (current ==1){
                remove.removeCl(arrSlider)
                createLeftPosition(arrSlider,current)
            }
            if (current ==0){
                remove.removeCl(arrSlider)
                createLeftLeftPosition(arrSlider,current)
            }
            if (arrSlider.length>5 && current == -1){
                remove.removeCl(arrSlider)
                createLastLeftPosition(arrSlider,current)
            }
            if (arrSlider.length>5 && current == -2){
                remove.removeCl(arrSlider)
                createPreLastLeftPosition(arrSlider,current)
            }
            if (arrSlider.length>5 && current == arrSlider.length-1){
                remove.removeCl(arrSlider)
                // createPreLastLeftPosition(arrSlider,current)
            }
        })
    });
}


function createLeftPosition(arrSlider,current){
    arrSlider[current-1].classList.add("slide_l");
    arrSlider[current+1].classList.add("slide_r");

    arrSlider[current].classList.add("centre_slide");

    arrSlider[current+2].classList.add("slide_rr");
    arrSlider[arrSlider.length-1].classList.add("slide_ll");
}

function createLeftLeftPosition(arrSlider,current){
    arrSlider[arrSlider.length-1].classList.add("slide_l");
    arrSlider[current+1].classList.add("slide_r");

    arrSlider[current].classList.add("centre_slide");

    arrSlider[current+2].classList.add("slide_rr");
    arrSlider[arrSlider.length-2].classList.add("slide_ll");
}
function createLastLeftPosition(arrSlider,current){
    arrSlider[arrSlider.length-2].classList.add("slide_l");
    arrSlider[current+1].classList.add("slide_r");

    arrSlider[arrSlider.length-1].classList.add("centre_slide");

    arrSlider[current+2].classList.add("slide_rr");
    arrSlider[arrSlider.length-3].classList.add("slide_ll");
}
function createPreLastLeftPosition(arrSlider,current){
    arrSlider[arrSlider.length-2].classList.add("slide_l");
    arrSlider[0].classList.add("slide_r");

    arrSlider[arrSlider.length-1].classList.add("centre_slide");

    arrSlider[1].classList.add("slide_rr");
    arrSlider[arrSlider.length-3].classList.add("slide_ll");
}




//
// function first(){
//     arrSlider[current].classList.add("slide_show");
//     arrSlider[current-1].classList.add("slide_l");
//     arrSlider[arrSlider.length-1].classList.add("slide_r");
// }
//
// function centreSlideShow(){
//     arrSlider[current].classList.add("slide_show");
//     arrSlider[current+1].classList.add("slide_r");
//     arrSlider[current-1].classList.add("slide_l");
// }
//
// function third(){
//     arrSlider[current-1].classList.add("slide_r");
//     arrSlider[arrSlider.length-1].classList.add("slide_l");
//     arrSlider[0].classList.add("slide_show");
// }


console.log(current)

// console.log(blocks[blocks.length-1])