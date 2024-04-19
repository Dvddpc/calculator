function ChangeColor(){
    console.log("Function is running");
    var box = document.getElementById("box");
    box.style.backgroundColor = "green";
    box.style.marginLeft = "200px";
}

 function Plus(){
    
    var input = document.getElementById("firstNum");
    var input2 = document.getElementById("secondNum");
 
    var output = document.getElementById("Output")
    var result =(input.value*1) + (input2.value*1);

    output.innerHTML = "The text input is: " + result;
}
function Minus(){
    
    var input = document.getElementById("firstNum");
    var input2 = document.getElementById("secondNum");
 
    var output = document.getElementById("Output")
    var result =(input.value*1) - (input2.value*1);

    output.innerHTML = "The text input is: " + result;
}
function Multiply(){
    
    var input = document.getElementById("firstNum");
    var input2 = document.getElementById("secondNum");
 
    var output = document.getElementById("Output")
    var result =(input.value*1) * (input2.value*1);

    output.innerHTML = "The text input is: " + result;
}
function Divide(){
    
    var input = document.getElementById("firstNum");
    var input2 = document.getElementById("secondNum");
 
    var output = document.getElementById("Output")
    var result =(input.value*1) / (input2.value*1);

    output.innerHTML = "The text input is: " + result;
}