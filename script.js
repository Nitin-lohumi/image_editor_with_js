const file_input = document.getElementById("file_input");
const choose_image = document.getElementById("choose_image");
const save = document.getElementById("save_image");
const alert = document.getElementById("alter");
const filter_item = document.getElementById("filter_item");
const per = document.getElementById("per");
let input = document.getElementById('range_input');
const img = document.getElementById("img");
const loadImage = ()=>{
    let file = file_input.files[0];
     img.src =URL.createObjectURL(file);
    alert.style.display="none";
    img.addEventListener("load",()=>{
        document.querySelector(".box1").classList.remove("disable");
    })
}

function brightness(){
    filter_item.innerHTML = "brightness";
}
function contrast(){
    filter_item.innerHTML = "contrast";
}
function saturate(){
    filter_item.innerHTML = "saturate";
}
function sepia(){
    filter_item.innerHTML = "sepia";
}
input.addEventListener("input",(event)=>{
    if(filter_item.innerHTML==="brightness"){
        per.innerHTML="2";
        per.innerHTML= event.target.value;
        img.style=`filter:brightness(${per.innerHTML})`;
    }
    else if(filter_item.innerHTML==="contrast"){
        per.innerHTML="2";
        per.innerHTML= event.target.value;
        img.style=`filter:contrast(${per.innerHTML})`;
    }
    else if(filter_item.innerHTML==="saturate"){
        per.innerHTML="2";
        per.innerHTML= event.target.value;
        img.style=`filter:saturate(${per.innerHTML*1/3})`;
    }
    else if(filter_item.innerHTML==="sepia"){
        per.innerHTML="2";
        per.innerHTML= event.target.value;
        img.style=`filter:saturate(${per.innerHTML*.3})`;
    }

});

file_input.addEventListener("change",loadImage);
choose_image.addEventListener("click",()=>{file_input.click()});
