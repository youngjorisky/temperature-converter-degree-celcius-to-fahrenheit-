const number = document.getElementById("number");
const celcius = document.getElementById("tocelcius");
const fahrenheit = document.getElementById("tofahrenheit");
const answer = document.getElementById("answer");
let number1;

function submit(){
    if(celcius.checked){
        number1 = Number(number.value);
        number1 = (number1 - 32) * 5/9;
        answer.textContent = number1.toFixed(1) + "°C";
    }
    else if(fahrenheit.checked){
        number1 = Number(number.value);
        number1 = (number1 * 9/5) + 32;
        answer.textContent = number1.toFixed(1) + "°F";
    }
    else{
        answer.textContent = 'Please select an option.';
    }
}