let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#reset-btn");

let newGameBtn = document.querySelector("#new-btn");

let msgContainer = document.querySelector(".msg-container");

let msg = document.querySelector("#msg")

let turnO = true; //palyerX playerO

//winning pattern
let winPattern = [

   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,4,5]   

];


const resetGame = ()=>{

  turnO = true;
  unableBoxes();
  msgContainer.classList.add("hide")
}


boxes.forEach((box) => {

  box.addEventListener("click",()=>{

    console.log("box wass clicked");
    // box.innerText ="a"

    if(turnO){ //Player0

       box.innerText = "O"
       turnO = false;


    }

    else{  //PlayerX

      box.innerText = "X"
      turnO = true;

    }

    box.disabled = true;

    checkWinner();
  });

});

const disableBoxes =()=>{

  for(let box of boxes){

    box.disabled = true;
  }
}



const unableBoxes =()=>{

  for(let box of boxes){

    box.disabled = false;

    box.innerText = "";
  }
}



const  showWinner=(winner)=>{

  msg.innerText =`Congratulation, winner is ${winner}`;

  msgContainer.classList.remove("hide");
 
   disableBoxes();
};



const checkWinner =()=>{

  for(let pattern of winPattern){
    // console.log(pattern);

    // console.log(pattern[0], pattern[1], pattern[2]);

    // console.log(
    //    boxes[pattern[0]].innerText,
    //    boxes[pattern[1]].innerText,
    //    boxes[pattern[2]].innerText
      
    //   )


      let pos1Val = boxes[pattern[0]].innerText;
      
      let pos2Val = boxes[pattern[1]].innerText;

      
      let pos3Val = boxes[pattern[2]].innerText;

      //winning condition

      if(pos1Val != "" && pos2Val != ""){

        if(pos1Val === pos2Val && pos2Val === pos3Val){

          // console.log("Winner",pos1Val);

          showWinner(pos1Val);
        }
      }
  }
  
};

newGameBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)



























