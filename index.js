// document.querySelector("button").addEventListener("click",handleClick)
// function handleClick(){
//     alert("i got clicked")
// }

for( let i =0 ; i <document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        // if (document.querySelectorAll(".drum")[i].innerHTML=="w"){
        //     let audio = new Audio("sounds/crash.mp3")
        // audio.play()
        // }
       

        let htmlButtonInnerText = this.innerHTML;
        switch (htmlButtonInnerText) {
            case "w":
                let crash = new Audio("sounds/crash.mp3")
                audio.play()
                break;
            case "w":
                let kick_bass= new Audio("sounds/tom-3.mp3")
                audio.play()
                break;
        
            default:
                break;
        }
    })
    
}