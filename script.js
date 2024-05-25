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
}
file_input.addEventListener("change",loadImage);
choose_image.addEventListener("click",()=>{file_input.click()});

function brightness(){
    filter_item.innerHTML = "brightness";
    input.addEventListener("input",(event)=>{
        per.innerHTML= event.target.value;
        img.style=`filter:brightness(${per.innerHTML})`
     });
}
function contrast(){
    per.innerHTML="1";
    filter_item.innerHTML = "contrast";
    input.addEventListener("input",(event)=>{
        per.innerHTML= event.target.value ;
     });
}
function sharpness(){
    filter_item.innerHTML = "sharpness";
    input.addEventListener("input",(event)=>{
        per.innerHTML= event.target.value ;
     });
}
function beauty(){
    filter_item.innerHTML = "beauty";
    input.addEventListener("input",(event)=>{
        per.innerHTML= event.target.value ;
     });
}
function setRange(){
   
}
