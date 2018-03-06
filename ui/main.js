console.log('Loaded!');
var element =document.getElementById("main-text");
element.innerHTML="New Value";
//Move the image

var img= document.getElementById("madi");
var marginRight=0;
function moveLeft(){
    marginRight=marginRight+1;
    img.style.marginRight=marginRight + "px";
}
img.onclick=function(){
    var interval =setInterval(moveLeft, 100);
}