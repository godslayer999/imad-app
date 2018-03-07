var button =document.getElementById('button');
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
request.open('GET','localhost:8080/counter',true);
request.send(null);
};
