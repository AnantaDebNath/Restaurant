for(var i=0;i<2;i++){
document.querySelectorAll(".play")[i].addEventListener("click",function(){
   var text=this.innerHTML;
   console.log(text);
    switch(text){
        case "Perfect":
         var audio=new Audio("Song/perfect.mp3");
         audio.play();
         break;

         case "Purnota":
         var audio=new Audio("Song/purnota.mp3");
         audio.play();
         break;  
    }
});
}