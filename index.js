var numbersOfDrum = document.querySelectorAll("button").length;

for (var i = 0; i < numbersOfDrum; i++) {
    var selectionDrum = document.querySelectorAll("button")[i].addEventListener("click", addSound);
}

function addSound(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {

    switch (key) {
        case "w":
            var crash = new Audio(scr = "sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio(scr = "sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio(scr = "sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio(scr = "sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio(scr = "sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio(scr = "sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio(scr = "sounds/tom-4.mp3");
            tom4.play();
            break;
        default: 
            console.log(this.innerHTML);
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function (){
        activeButton.classList.remove("pressed");
    }, 100);
}