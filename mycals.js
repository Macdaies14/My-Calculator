display = document.getElementById('display');

function clearAll() {
    display.value = "";
    display.placehold = "0";
    
}

function deleteOne() {
    display.value = display.value.slice(0, -1);
}

function buttonDisplay(number) {
    display.value += number;
}

function result() {
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = "Syntax Error"
    }
}