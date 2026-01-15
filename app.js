let data = document.getElementById('data');
let sound = new Audio("click.mp3");
let buttons = document.querySelectorAll("button");

for (i = 0; i < buttons.length; i++) {
    buttons [i].addEventListener("click", () => {
        sound.currentTime = 0;
        sound.play();
    })
}

function addValue(input){
    data.value += input;
}
function clearData(){
    data.value = "";
}

function result(){
    try {
        data.value = eval(data.value);
    } 
    catch (error) {
        data.value = 'Error';
    }
}

function deleteData(){
    data.value = data.value.slice(0, -1);
}

function percentage(){
    try {
        data.value = eval(data.value) / 100;
    } catch (error) {
        data.value = 'Error';
    }
}

 