var input = document.querySelector("input")
var btn = document.querySelector("button")
var output = document.querySelector("h2")

function takeInput(){

var DOB = input.value 
var arr = (DOB.split("/"))

if (arr[0]=="01"){
    output.innerText="Neither prime nor composite"
  }
  if (arr[0]=="02"  && parseInt(arr[1])<32){
    output.innerText="\nYour birthdate is prime!"}
    else
    output.innerText="\nPlease enter a valid date!"
  
  for(j=2;j<parseInt(arr[0]);j++){
  
    if (parseInt(arr[1])<1 || parseInt(arr[1])>12){
        output.innerText="\nPlease enter a valid date!"
    }
    else if(parseInt(arr[0])<1 || parseInt(arr[0])>31){
     output.innerText="\nPlease enter a valid date!"
    ;}
    else if( ( parseInt(arr[1])==11 || parseInt(arr[1])==06 ||  parseInt(arr[1]) ==09 || parseInt(arr[1])==04 ) && parseInt(arr[0])>30 ){
        output.innerText="\nPlease enter a valid date!"}
  
  
    else if(parseInt(arr[0])%j==0){
        output.innerText="\nYour birthdate is not prime!"
        break;}
         else
         output.innerText="\nYour birthdate is prime!"
      break;
   
  }

}

btn.addEventListener("click", takeInput)