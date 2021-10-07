for(var i=0; i<document.querySelectorAll(".drum").length; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  var buttonpress=this.innerHTML;
  makesound(buttonpress);
  buttonAnimation(buttonpress);
});
}
//var audio= new Audio('sounds/tom-1.mp3');
//audio.play();
document.addEventListener("keypress", function(event){
  makesound(event.key);
  buttonAnimation(event.key);
});

function makesound(key){
  switch (key) {
    case "w": var audio= new Audio('sounds/tom-1.mp3');
              audio.play();
              break;
    case "a": var tom1= new Audio('sounds/tom-2.mp3');
              tom1.play();
              break;
      case "s": var tom2= new Audio('sounds/tom-3.mp3');
                tom2.play();
                break;
      case "d": var tom3= new Audio('sounds/tom-4.mp3');
                tom3.play();
                break;
      case "j": var tom4= new Audio('sounds/crash.mp3');
                tom4.play();
                break;
      case "k": var kick= new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;
      case "l": var snare= new Audio('sounds/snare.mp3');
                snare.play();
                break;


    default:
            document.querySelector("body").classList.add("red");
            setTimeout(function(){
              document.querySelector("body").classList.remove("red");
            }, 200);
            var wrong= new Audio('sounds/error.wav');
            wrong.play();
             document.querySelector(".msg").style.visibility="visible";
             setTimeout(function(){
               document.querySelector(".msg").style.visibility="hidden";
             },300);



}}
function buttonAnimation(presske) {
  document.querySelector("."+presske).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+presske).classList.remove("pressed");
  }, 100) ;
}
