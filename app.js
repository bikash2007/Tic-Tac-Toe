var boxes = document.querySelectorAll(".box")
var reset = document.getElementById("reset")
 var msg = document.querySelector('#msg-box')
 var blue = document.querySelector('#bscore')
 var red = document.querySelector('#rscore')
 var scoreX = 0
 var scoreO= 0
 const winpatterns=[
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [3,4,5],
   [6,7,8],
   [1,4,7],
   [2,5,8],
   [6,4,2],
 ]
 var turn0 =true;
   

 const disablebtn=() =>{
   for(let box of boxes){
     box.disabled= true;
   }
 }
  const enablebtn=() =>{
    for(let box of boxes){
      box.disabled= false;
      box.innerHTML=""
      box.style=""
    }
  }
  const resetgame=() =>{
    turn0=true;
     enablebtn()
  }

 boxes.forEach(box=>{
    box.addEventListener("click",function(){
          if(turn0){
            box.innerHTML="X"
            box.style.backgroundColor = "rgb(9, 9, 66)" 
            turn0=false;
            msg.innerHTML ="O TURN"
            
          }else{
            
            box.innerHTML="O"
            box.style.backgroundColor = "rgb(92, 13, 13)" 
            turn0=true;
            msg.innerHTML ="X TURN"
             
          }
          box.disabled=true;
          checkwinner()
    })

 })
const checkwinner=()=>{
    for(let pattern of winpatterns){
    
    
       let position1= boxes[pattern[0]].innerHTML;
       let position2 = boxes[pattern[1]].innerHTML;
       let position3 = boxes[pattern[2]].innerHTML;
          
       if(position1!=""&& position2!=""&& position3!=""){
          if(position1===position2 && position2===position3){
             msg.innerHTML = "winner is " +position1;
             disablebtn()
             if(position1 == X){
              c
               scoreX= scoreX + 1;
             } else{
              scoreO = scoreO + 1
             }
             
          }

       }

    }
}
reset.addEventListener("click",resetgame)

blue.innerHTML=scoreX;
red.innerHTML=scoreO;



 
   
  


   