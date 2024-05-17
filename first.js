
let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = ()=>{
    const option = ["paper","rock","scissor"];
    const index = Math.floor(Math.random()*3);
    return option[index];
};

const drawgame = ()=>{
    
    msg.innerText = "match draw";
    msg.style.backgroundColor= "#081b31";
};

const showwinner = (userwin,userchoice, compchoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
       
    }
    else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You lost. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playgame = (userchoice)=>{
    
    const compchoice = gencompchoice();
   
    if(userchoice === compchoice){
        drawgame();
    }
    else{
        let userwin = true;
        if(userwin === "rock"){
            userwin = compchoice==="paper" ? false:true;
        }
        else if(userwin==="paper"){
            userwin = compchoice=== "scissor"? false:true; 
        }
        else{
            userwin = compchoice=== "rock"? false:true; 
        }
        showwinner(userwin, userchoice, compchoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice)

    });
});   