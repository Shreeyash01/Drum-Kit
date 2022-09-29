// document.querySelector("button").addEventListener("click",handleclick);
// function handleclick()
// {
//     alert("i got clicked");
// }

var drumbtns = document.querySelectorAll(".drum").length;
for (var i = 0; i < drumbtns; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var btnInnerrHTML = this.innerHTML;
        makeSound(btnInnerrHTML);
        btnAnimation(btnInnerrHTML);
    });
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    btnAnimation(event.key);
});


function makeSound(key) {
    switch (key) {
        case 'W':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'A':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case 'S':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'D':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'J':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 'K':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'L':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        default:
            break;
    }
}

function btnAnimation(currentkey) {
    var a = document.querySelector("." + currentkey);
    a.classList.add("pressed");

    setTimeout(function () {
        a.classList.remove("pressed");
    }, 100);
}