console.log(document);
const inputs = document.querySelectorAll('input'),
button = document.querySelector("button"),
mobile =  document.getElementById("mobile"),
expire = document.getElementById( "expire");

let OTP = "" , expireInterval ="";


function generateOTPs() {
    OTP= (
        Math.floor( Math.random() * 10) +
        "" +
        Math.floor( Math.random() * 10) +
        "" +
        Math.floor( Math.random() * 10) +
        "" +
        Math.floor( Math.random() * 10) 
      
        );

        alert("Your OTO is : " + OTP)

        inputs[0]. focus();
        expire.innerText = 10
       expireInterval = setInterval (function () {
            expire.innerText--;
            if(expire.innerText == 0){
                clearInterval(expireInterval);
            }
        }, 1000);
}

// Generate a random number between min and max


function clearOTPs(){
    inputs.forEach((input,i)=>{
       input.value =""; 
       if(i==0){
        input.removeAttribute("disabled")
       }
       if(i!=0){
        input.setAttribute("disabled","true")
       }
       input.setAttribute("disabled" , true);
           });
           clearInterval(expireInterval);
           expire.innerText=0;
           button.setAttribute("disabled" , true);
           button.classList.remove("active")
}

inputs.forEach(( input, index ) =>{ 
    input.addEventListener("keyup",function (e) {
     const currrentInput = input,
     nextInput = input.nextElementSibling,
     prevInput =  input.previousElementSibling;
 
    //  console.log(currentIndex, nextInput, prevInput);

     if(
        nextInput && 
        nextInput. hasAttribute("disabled") && 
        currrentInput.value !== ""
         ){
        nextInput.removeAttribute("disabled", true);
        nextInput.focus(); 
        // focus for next input
    }
    // delete inputs revers 
    if (e.key === "Backspace"){
        inputs.forEach()
    }
        if(e.key === "Backspace"){
    inputs.forEach((input, index1) =>{
                if(index <= index1 && prevInput){
                    input.setAttribute("disabled", true);
                    prevInput.focus();
                    prevInput.value = "";
                }
            });
        }
        if (!inputs[3].disabled && inputs[3].value !== ""){
            inputs[3].blur();
            button.classList.add("active");
            return;
        }
        button.classList.remove("active")
    });
 });
 window.addEventListener("load",() => {
    let x = prompt("Please enter your mobile number to verify your account ");
    if (x){
        mobile.innerText = x;
        generateOTPs()
    }
 })

 button.addEventListener( 'click', ()=>{
    let verify="";
    inputs.forEach((input)=>{
 verify += input.value; 
    });
    
   if (verify == OTP){
    alert('Your  Account has been verified');
    clearOTPs()
   }else{
    alert('Wrong OTP  Please  try  again');
   }
console.log('verify');
 });