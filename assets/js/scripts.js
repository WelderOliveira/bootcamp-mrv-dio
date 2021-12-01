var currentNumberSpan = document.getElementById('currentNumber');
var currentNumber = 0;
var buttonAdd = document.getElementById('adicionar');
var buttonSub = document.getElementById('subtrair');

buttonSub.addEventListener("click", function () {
    if (currentNumber <= 0) {
        buttonSub.disabled=true;
    }else{
        currentNumber = currentNumber - 1;
    }

    buttonAdd.disabled=false;    
    currentNumberSpan.innerHTML = currentNumber;
});

buttonAdd.addEventListener("click",function () {
    if (currentNumber >= 10) {
        buttonAdd.disabled=true;    
    }else{
        currentNumber = currentNumber + 1;
    }
    
    buttonSub.disabled=false;
    currentNumberSpan.innerHTML = currentNumber;
});

// function increment() {
    
//     if (currentNumber >= 10) {
//         buttonAdd.disabled=true;    
//     }else{
//         currentNumber = currentNumber + 1;
//     }
    
//     buttonSub.disabled=false;
//     currentNumberSpan.innerHTML = currentNumber;
// }

// function decrement() {

//     if (currentNumber <= 0) {
//         buttonSub.disabled=true;
//     }else{
//         currentNumber = currentNumber - 1;
           
//     }

//     buttonAdd.disabled=false;    
//     currentNumberSpan.innerHTML = currentNumber;
// }