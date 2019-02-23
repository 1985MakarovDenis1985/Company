import {RemoveClass} from "./removeClass";
let remove= new RemoveClass();
//
//
export class CreateClasses {
    createClasses(arrSlider,current) {
            arrSlider[current-1].classList.add("slide_l");
            arrSlider[current-2].classList.add("slide_ll");

            arrSlider[current].classList.add("centre_slide");

            arrSlider[current+1].classList.add("slide_r");
            arrSlider[current+2].classList.add("slide_rr");
    }

    createLeftPosition(arrSlider,current){
        arrSlider[0+1].classList.add("centre_slide");
        arrSlider[0].classList.add("slide_l");

        arrSlider[current].classList.add("slide_r");

        arrSlider[arrSlider.length-2].classList.add("slide_rr");
        arrSlider[arrSlider.length-1].classList.add("slide_ll");

    }

}



