let boxes= document.querySelectorAll(".btn")
let resetBtn=document.querySelector("#reset-btn")
let newGamebtn= document.querySelector("#new-btn")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")
let turn=true;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];



const resetGame= ()=>{
    turn=true;
    enableBoxes();
    msgContainer.classList.add("hide")
     
  };
boxes.forEach((btn) => {
    btn.addEventListener("click",()=>{
    //     console.log("hdhhdgg");
    // btn.innerText="ghd";


    if (turn){
        btn.innerText="o";
        turn=false;
    }else{
        btn.innerText="x"
        turn=true
    }
    btn.disabled= true
   checkWinner();

}); 
});

// const checkWinner=()=>{
//     for (let pattern of winPattern) {
//         let pos1Val=boxes[pattern[0]].innerText;
//         let pos2Val=boxes[pattern[1]].innerText;
//         let pos3Val=boxes[pattern[2]].innerText;
    
    
//     
//         if(pos1Val !=" " && pos2Val != " " && pos3Val != " "){
//             if(pos1Val === pos2Val && pos2Val === pos3Val){
//                 console.log("winner");
//             }
//         }
//    } 
 // }

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
     box.innerText="";
    }
}

 const showWinner = (winner)=>{
    msg.innerText=`congrutulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide")
    disableBoxes();
 };
 
const checkWinner = () => {
    for (let pattern of winPattern) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
         console.log("winner",pos1Val)
            showWinner(pos1Val);
          //return true;
        }
      }
    }
  };

  newGamebtn.addEventListener("click",resetGame);
  resetBtn.addEventListener("click",resetGame);




    
        
        
//         console.log(pattern)
//  console.log(boxes[pattern[0]],boxes[pattern[1]],
//      boxes[pattern[2]]);
//console.log(pattern[0],pattern[1],pattern[2]);   
//   console.log(boxes[pattern[0]].innerText,
//     boxes[pattern[1]].innerText,
//     boxes[pattern[2]].innerText);
  //console.log(pattern[0],pattern[1],pattern[2]);   
//   let pos1Val=btn[pattern[0]].innerText;
//         let pos2Val=btn[pattern[1]].innerText;
//         let pos3Val=btn[pattern[2]].innerText;

    //     if(pos1Val !=" " && pos2Val!= " " && pos3Val != " "){
    //         if(pos1Val == pos2Val == pos3Val){
    //             console.log("winner")
    //         }
    //     }
    // }
    
