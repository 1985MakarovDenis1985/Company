let options = [
    {
        name: "Director of Frond-And",
        description: "Director of Frond-And",
        img: "../img/coffee-3.png"
    },
    {
        name: "Director of Back-End",
        description: "Director of Back-End",
        img: "../img/coffee-3.png"
    },
    {
        name: "Our Designers",
        description: "Our Designers",
        img: "../img/coffee-3.png"
    },
    {
        name: "Contact centre",
        description: "Contact centre",
        img: "../img/coffee-3.png"
    }

];

let container_AboutUs = document.getElementById("container_AboutUs");






function createNewElement(tag, innerContent = null, classStr = null) {
    let el = document.createElement(tag);
    el.innerHTML = (innerContent) ? innerContent:"";
    el.className = (classStr) ? classStr:"";
    return el;
}

function addElement(parrent, child) {
    child.map((el)=>parrent.appendChild(el));
    return parrent;
}

for (i=0; i<options.length; i++){
    let about_us_description = createNewElement("div", "", "about_us_description");
    let blocks_about_us_description = createNewElement("div", options[i].name, "blocks_about_us_description");
    let blocks_about_us = createNewElement("div", "", "blocks_about_us");
    blocks_about_us_description.appendChild(about_us_description);
    blocks_about_us.appendChild(blocks_about_us_description);

    container_AboutUs.appendChild(blocks_about_us)
}

// console.log(container_AboutUs)

