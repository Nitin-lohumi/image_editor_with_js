let file_input = document.getElementById("file_input");
let choose_image = document.getElementById("choose_image");
let save = document.getElementById("save_image");
let alter = document.getElementById("alter");
let filter_item = document.getElementById("filter_item");
let per = document.getElementById("per");
let input = document.getElementById('range_input');
let img = document.getElementById("img");
let save_image = document.getElementById("save_image");
let download= document.getElementById("download");
let range_input = document.getElementById("range_input");
let img_url;
let check=0;
let loadImage=()=>{
    let file = file_input.files[0];
    img.src =URL.createObjectURL(file);
    alter.style.display="none";
    img.addEventListener("load",()=>{
        document.querySelector(".box1").classList.remove("disable") ;
    });
    check=1;
}
function brightness(){
    filter_item.innerHTML = "brightness";
    range_input.value="1";
    per.innerHTML=0;
}
function contrast(){
    filter_item.innerHTML = "contrast";
    range_input.value="1";
    per.innerHTML=0;
}
function saturate(){
    filter_item.innerHTML = "saturate";
    range_input.value="1";
    per.innerHTML=0;
}
function sepia(){
    filter_item.innerHTML = "sepia";
    range_input.value="1";
    per.innerHTML=0;
}
input.addEventListener("input",(event)=>{
    if(filter_item.innerHTML==="brightness"){
        per.innerHTML=0;
        per.innerHTML= event.target.value;
        range_input.value=`${per.innerHTML}`;
        img.style=`filter:brightness(${per.innerHTML})`;
    }
    else if(filter_item.innerHTML==="contrast"){
        per.innerHTML=0;
        per.innerHTML= event.target.value;
        img.style=`filter:contrast(${per.innerHTML})`;
        range_input.value=`${per.innerHTML}`;
    }
    else if(filter_item.innerHTML==="saturate"){
        per.value=0;
        per.innerHTML= event.target.value;
        img.style=`filter:saturate(${per.innerHTML})`;
        range_input.value=`${per.innerHTML}`;
    }
    else if(filter_item.innerHTML==="sepia"){
        per.innerHTML=0;
        per.innerHTML= event.target.value;
        img.style=`filter:sepia(${per.innerHTML})`;
        range_input.value=per.innerHTML;
    }
});
function reset(){
    per.innerHTML="1";
    range_input.value=1;
    img.style=`filter:saturate(1)`;
    img.style=`filter:sepia(1)`;
    img.style=`filter:contrast(1)`;
    img.style=`filter:brightness(1)`;
}
const btn_save = document.getElementById('downloadImage');
btn_save.addEventListener("click",()=>{
    if(check==1){
        const convas = document.createElement("canvas");
        const ctx = convas.getContext("2d");
        convas.width=img.naturalWidth;
        convas.height= img.naturalHeight;
        ctx.filter = 
       `brightness(${per.innerHTML*.8}) 
        contrast(${per.innerHTML}) 
        saturate(${per.innerHTML}) 
        sepia(${per.innerHTML})`;
         ctx.drawImage(img,0,0, convas.width,convas.height);
        // document.body.appendChild(convas);
        const link = document.createElement("a");
        link.download = "image.jpg";
        link.href = convas.toDataURL();
        link.click();
    }
    else{
        alert("please select the photo");
    }
});
file_input.addEventListener("change",loadImage);
choose_image.addEventListener("click",()=>{file_input.click()});
