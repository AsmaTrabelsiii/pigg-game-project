let dice=Math.trunc(Math.random()*6+1)
let currenScore=document.querySelector("current-score-0")
currenScore=0

// roll-dice
document.querySelector(".roll-dice").addEventListener("click",function(){
    
    if (dice==1) 
       { document.querySelector("img").src="dice-1.png"
           currenScore=0
    document.querySelector(".current-score-0").textContent=currenScore
       }
    else if(dice==2)
      {  document.querySelector("img").src="dice-2.png"
        currenScore+=2
    document.querySelector(".current-score-0").textContent=currenScore
    dice=Math.trunc(Math.random()*6+1)}
    else if (dice==3)
   { document.querySelector("img").src="dice-3.png"
    currenScore+=3
    document.querySelector(".current-score-0").textContent=currenScore
dice=Math.trunc(Math.random()*6+1)}
 
     else if (dice==4)
  {  document.querySelector("img").src="dice-4.png"
     currenScore+=4
     document.querySelector(".current-score-0").textContent=currenScore
dice=Math.trunc(Math.random()*6+1)}

     else if (dice==5)
    {document.querySelector("img").src="dice-5.png"
         currenScore+=5
         document.querySelector(".current-score-0").textContent=currenScore
dice=Math.trunc(Math.random()*6+1)}
     else 
    document.querySelector("img").src="dice-6.png"
 currenScore+=6
 document.querySelector(".current-score-0").textContent=currenScore
dice=Math.trunc(Math.random()*6+1)


})
// hold
let score=document.querySelector("score-1").textContent
document.querySelector(".hold").addEventListener("click",function(){
score=+currenScore
document.querySelector("score-1").textContent=score
if (score>=100) {

    
}
})







//new game
document.querySelector(".new game").addEventListener("click",function toggleSidebar() {
        active.classList.toggle("active");
      })
