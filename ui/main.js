var button =document.getElementById('counter');
button.onclick=function(){
//create a request object 
var request = new XMLHttpRequest();

//Capture the request and store it in the variable
request.onreadystatechange=function(){
if(request.readyState===XMLHttpRequest.DONE){
  //Take some action
  if(request.status===200){
   var counter = request.responseText;
   var span = document.getElementById('count');
   span.innerHTML=counter.toString();
}}
//Not done yet
};
//Make the request
request.open('GET','http://vishalvishnu9061.imad.hasura-app.io/counter',true);
request.send(null);
};



var submit =document.getElementById('submit_btn');
submit.onclick=function(){
//create a request object 
var request = new XMLHttpRequest();

//Capture the request and store it in the variable
request.onreadystatechange=function(){
if(request.readyState===XMLHttpRequest.DONE){
  //Take some action
  if(request.status===200){

var names=request.responseText;
names=JSON.parse(names);
var list='';
for(var i=0;i<names[i].length;i++){
    list+='<li>'+names[i]+'</li>';
}
var ul=document.getElementId('namelist');
ul.innerHTML=list;

}}
//Not done yet
};
//Make the request
var nameInput=document.getElementId('name');
name=nameInput.value();
request.open('GET','http://vishalvishnu9061.imad.hasura-app.io/submit-name/?name='+name,true);
request.send(null);
};
