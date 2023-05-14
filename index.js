// document.querySelector("button").addEventListener("click",handleClick)
// function handleClick(){
//     alert("i got clicked")
// }

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    // if (document.querySelectorAll(".drum")[i].innerHTML=="w"){
    //     let audio = new Audio("sounds/crash.mp3")
    // audio.play()
    // }

    let htmlButtonInnerText = this.innerHTML;
    playSound(htmlButtonInnerText)
    addButtonAnimation(htmlButtonInnerText)


    //enhanced this part of the code with a fucntion
    // switch (htmlButtonInnerText) {
    //   case "w":
    //     let crash = new Audio("sounds/crash.mp3");
    //     crash.play();
    //     break;
    //   case "a":
    //     let kick_bass = new Audio("sounds/kick-bass.mp3");
    //     kick_bass.play();
    //     break;
    //   case "s":
    //     let snare = new Audio("sounds/snare.mp3");
    //     snare.play();
    //     break;

    //   case "d":
    //     let tom1 = new Audio("sounds/tom-1.mp3");
    //     tom1.play();
    //     break;
    //   case "j":
    //     let tom2 = new Audio("sounds/tom-2.mp3");
    //     tom2.play();
    //     break;
    //   case "k":
    //     let tom3 = new Audio("sounds/tom-3.mp3");
    //     tom3.play();
    //     break;
    //   case "l":
    //     let tom4 = new Audio("sounds/tom-4.mp3");
    //     tom4.play();
    //     break;
    //   default:
    //     break;
    // }
  })

}

function playSound(key){
    switch (key) {
        case "w":
          let crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;
        case "a":
          let kick_bass = new Audio("sounds/kick-bass.mp3");
          kick_bass.play();
          break;
        case "s":
          let snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;
  
        case "d":
          let tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
        case "j":
          let tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
        case "k":
          let tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;
        case "l":
          let tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;
        default:
          break;
      }
}

//code for the keypress event and making sound for the coresponding button
document.addEventListener("keypress",function(e){
    playSound(e.key)
    addButtonAnimation(e.key)
})

function addButtonAnimation(key) {
  let keyPressed = document.querySelector("."+key)
  keyPressed.classList.add("pressed")
  setTimeout(() => {
    keyPressed.classList.remove("pressed")
  }, 100);
}
