
//Button press
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);
    
    //good and future way
}

// for(var i=0;i<=6;i++){
// document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);     by me
// }

function handleclick(){
    var innerHTML = this.innerHTML;
    makesound(innerHTML);
    buttonanimation(innerHTML);
    }

    //Keyboard press
document.addEventListener("keypress", eventlistner);

function eventlistner(event){
    makesound(event.key);
    buttonanimation(event.key);
}


    

function makesound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
        case "k":
            var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
}
}

function buttonanimation(currentkey){
    var activebutton = document.querySelector("."+ currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },200);
}

// var audio = new Audio("/sounds/crash.mp3");
//     audio.play();

