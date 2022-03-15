var buttons=document.getElementsByClassName("button");
var display= document.getElementById("display");
var operand= 0;
var result=null;
var oper1=0;
var oper2=0;
for(var i=0;i<buttons.length;i++) {
    buttons[i].addEventListener("click",function(){
        var value=this.getAttribute("data-value");
        if(value=='-'){
            operand=value;
            oper1=parseFloat(display.textContent);
            display.innerHTML = "";
        }
        else if(value=='%'){
            oper1=parseFloat(display.textContent);
            oper1=oper1/100;
            display.innerHTML = oper1;
        }
        else if(value=='+' || value=='*' || value=='/'){
            operand=value;
            oper1=parseFloat(display.textContent);
            display.innerHTML = "";            
        }
        else if(value=="AC"){
            oper1=null;
            oper2=null;
            result=null;
            operand=0;
            display.innerHTML ="";
        }
        else if(value=='+/-'){
            oper1=parseFloat(display.textContent);
            oper1=0-oper1;
            display.innerHTML = oper1;
        }
        else if(value=='='){
            oper2=parseFloat(display.textContent);
            console.log(oper1);
            console.log(oper2);
            console.log(operand);
            result = eval(oper1 + " " + operand + " " + oper2); 
            display.innerHTML = result;
        }
        else{
            display.innerHTML += value;
        }
    });
}