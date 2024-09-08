const boxes = document.querySelectorAll(".box") ;
console.log(boxes) ;
const player1 = document.querySelector(".player1") ;
const drow = document.querySelector(".tlt") ;
const player2 = document.querySelector(".player2") ;
const resetButton = document.querySelector(".rebtn") ;
const message = document.querySelector(".message-container") ;
const newgameButton = document.querySelector(".newgame") ;
const text = document.querySelector(".message") ;
const winingpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
] ;
let turn0 = true ;
let cnt = 0  , player1Win = 0 , player2Win = 0 ;
let dro = 0 ;

boxes.forEach((box) =>{
     //console.log(box) ;
box.addEventListener("click" , () =>{
   if(turn0){
    box.innerText = "O" ;
    turn0 = false  ;
   }
   else{
    box.innerText = "X" ;
    turn0 = true ;
   }
   box.disabled = true ;
  cnt++ ;
  let winner = cheakwinner() ;
  if(cnt == 9 &&  !winner){
     drowgame() ;
     setvalue(player1Win ,dro , player2Win) ;
  }
})
}) ;

const cheakwinner= ()=>{
   for(let pattern of winingpattern){
   let value1 = boxes[pattern[0]].innerText ;
  
   let value2 = boxes[pattern[1]].innerText ;
   let value3 = boxes[pattern[2]].innerText ;
  // console.log(value1, value2 , value3) ;
   if(value1 != "" && value2 != "" && value3 != ""){

   
   if(value1 === value2 && value2=== value3){
    showwiner(value1) ;
   
    return true ;
   }
   
  }



   }
} ;
 
const showwiner=(winner) =>{
      if(winner== 'X' ){
        player2Win++ ;
        text.innerText = "Winner this game player- X" ;
      }
      else{
        player1Win++ ;
        text.innerText = "Winner this game player- O" ;
      }
      setvalue(player1Win ,dro , player2Win) ;
      disablebox() ;

}

const disablebox = () =>{
    boxes.forEach((box) =>{
        box.disabled = true ;
    }) ;
}
 const drowgame =() =>{
    dro++ ;
    text.innerText= "Drow this game" ;
    disablebox() ;
 }

 const setvalue = ( playerone , dro , playertwo) =>{
    player1.innerText = "player-O-win: "+ playerone ;
    drow.innerHTML = "Drow: "+ dro;
    player2.innerHTML = "player-X-win: "+ playertwo;
    


 } ;

 setvalue(player1Win ,dro , player2Win) ;
  
 const undisablebox = () =>{
    boxes.forEach((box) =>{
        box.disabled = false ;
        box.innerText= "" ;
    })
 }
 newgameButton.addEventListener("click" ,() =>{
    text.innerText = "" ;
    cnt = 0 ;
    undisablebox() ;
 })

 resetButton.addEventListener("click" , () =>{
    text.innerText = "" ;
    cnt = 0 ;
    undisablebox() ;
    player1Win = 0 , dro = 0 , player2Win = 0 ; 
    setvalue(player1Win ,dro , player2Win) ;

 }) ;