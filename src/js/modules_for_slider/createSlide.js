import {RemoveClass} from "./removeClass";
let remove= new RemoveClass();
//
//
export class CreateClasses {





    change(current, arrArrows, arrSlider){
        arrArrows.map((el)=>{
            el.addEventListener("click", (e)=>{

                if (current >=2 && current < arrSlider.length-2){
                    remove.removeCl(arrSlider)
                    this.createClasses(arrSlider,current)
                }
                if (current ==1){
                    remove.removeCl(arrSlider)
                    this.createLeftPosition(arrSlider,current)
                }
                if (current ==0){
                    remove.removeCl(arrSlider)
                    this.createLeftLeftPosition(arrSlider,current)
                }
                if (arrSlider.length>5 && current == arrSlider.length-1){
                    remove.removeCl(arrSlider)
                    this.createLastLeftPosition(arrSlider,current)
                }
                if (arrSlider.length>5 && current == arrSlider.length-2){
                    remove.removeCl(arrSlider)
                    this.createPreLastLeftPosition(arrSlider,current)
                }
            })
        });
    }

    createClasses(arrSlider,current) {
        arrSlider[current-1].classList.add("slide_l");
        arrSlider[current-2].classList.add("slide_ll");
        arrSlider[current].classList.add("centre_slide");
        arrSlider[current+1].classList.add("slide_r");
        arrSlider[current+2].classList.add("slide_rr");
    }

    createLeftPosition(arrSlider,current){
        arrSlider[current-1].classList.add("slide_l");
        arrSlider[current+1].classList.add("slide_r");
        arrSlider[current].classList.add("centre_slide");
        arrSlider[current+2].classList.add("slide_rr");
        arrSlider[arrSlider.length-1].classList.add("slide_ll");
    }

    createLeftLeftPosition(arrSlider,current){
        arrSlider[arrSlider.length-1].classList.add("slide_l");
        arrSlider[current+1].classList.add("slide_r");
        arrSlider[current].classList.add("centre_slide");
        arrSlider[current+2].classList.add("slide_rr");
        arrSlider[arrSlider.length-2].classList.add("slide_ll");
    }
    createLastLeftPosition(arrSlider,current){
        arrSlider[current-1].classList.add("slide_l");
        arrSlider[0].classList.add("slide_r");
        arrSlider[current].classList.add("centre_slide");
        arrSlider[1].classList.add("slide_rr");
        arrSlider[current-2].classList.add("slide_ll");
    }
    createPreLastLeftPosition(arrSlider,current){
        arrSlider[current-1].classList.add("slide_l");
        arrSlider[current+1].classList.add("slide_r");
        arrSlider[current].classList.add("centre_slide");
        arrSlider[0].classList.add("slide_rr");
        arrSlider[current-2].classList.add("slide_ll");
    }

}



