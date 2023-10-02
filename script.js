
const question=[
    {
        que : "1. Who are founders of Indigg?",
        opt : [
                " a) Gabby Dizon,Beryl Li",
                 "b) Subham Mishra,Beryl Li",
                " c) Gabby Dizon,Marc Blank",
                " d) Matt Hartley,Akshat Rathee"
        ]
    },
    {
        que : "2. What is description of Indigg?",
        opt : [
                "a) Web Gaming platform",
                 "b) Changing world with Blockchain",
                "c) Building the world's largest Web3 Gaming DAO",
                "d) Web3 Revolution"
        ]
    },
    {
        que : "3. Where is headquarters of Indigg located?",
        opt : [
                "a) NewYork, USA",
                "b) Mumbai, India",
                 "c) Banglore, India",
                "d) Singapore"         
        ]
    },
    {
        que : "4. To which Industry  Indigg belong to?",
        opt : [
                 "a) Gaming",
                "b) FinTech",
                 "c) Consulting",
                 "d) Tele Communication"            
        ]
    },
    {
        que : "5. What are Indigg Specialities?",
        opt : [
                "a) Pega,Robotic Process Automation",
                "b) Web3",
                 "c) App development",
               "d) Gaming, Blockchain, Web3, NFTs, and Play to Earn"
        ]
    },
];
let queIndex=0;
var userAns=new Array(question.length);
var crctAns=[1,3,3,1,4];
var userName;
document.getElementById("introCard").style.display='flex';
document.getElementById("questionCard").style.display='none';
document.getElementById("scoreCard").style.display='none';
var countScore=0;
var timeleft = 10;
var timeInterval;

async function checkAns(selectedOption)
{
    document.getElementById("op1").disabled=true;
    document.getElementById("op2").disabled=true;
    document.getElementById("op3").disabled=true;
    document.getElementById("op4").disabled=true;
    userAns[queIndex]=selectedOption;
    if(userAns[queIndex]===crctAns[queIndex])
    {
        countScore+=1;
        document.getElementById("op"+selectedOption).style.backgroundColor="#8fe78f";
      
    }
    else
    {
        document.getElementById("op"+selectedOption).style.backgroundColor="#df9494";
        document.getElementById("op"+crctAns[queIndex]).style.backgroundColor="#8fe78f";
    }
    clearInterval(timeInterval);
   timeleft=10;
   await new Promise(resolve => setTimeout(resolve, 1000));
   incrementIndex();

}
function loadQuestion()
{      
    document.getElementById("question").textContent=question[queIndex].que;
    document.getElementById("op1").textContent=question[queIndex].opt[0];
    document.getElementById("op2").textContent=question[queIndex].opt[1];
    document.getElementById("op3").textContent=question[queIndex].opt[2];
    document.getElementById("op4").textContent=question[queIndex].opt[3];

    document.getElementById("op1").style.backgroundColor="#e8def2";
    document.getElementById("op2").style.backgroundColor="#e8def2";
    document.getElementById("op3").style.backgroundColor="#e8def2";
    document.getElementById("op4").style.backgroundColor="#e8def2";

    document.getElementById("op1").disabled=false;
    document.getElementById("op2").disabled=false;
    document.getElementById("op3").disabled=false;
    document.getElementById("op4").disabled=false;
    timeInterval=setInterval(runTimer,1000);
    
}
function startQuiz()
{
  userName=document.getElementById("userName").value;
  if(userName===undefined || userName.length==0 )
  {
    document.getElementById("warning").innerHTML="Please Enter Name";
  }
  else{
   
    document.getElementById("introCard").style.display='none';
    document.getElementById("questionCard").style.display='flex';
    queIndex=0;
    loadQuestion();

  }
 

}
function restart()
{
    userAns=new Array(question.length);
    queIndex=0;
    countScore=0; 
    timeleft=10;   
    loadQuestion();
    document.getElementById("introCard").style.display='none';
    document.getElementById("questionCard").style.display='flex';
    document.getElementById("scoreCard").style.display='none';
}
function decrementIndex()
{
    queIndex--;
    if(queIndex>=0)
    {
        loadQuestion();
    }
}

function incrementIndex()
{
    if(userAns[queIndex]!=undefined)
    {
        queIndex++;   
        if(queIndex===question.length)
        {
            document.getElementById("questionCard").style.display='none';
            document.getElementById("scoreCard").style.display='flex';  
            evaluate();   
        }
        else
        {            
            loadQuestion();
        }   
    }  
}

function evaluate()
{
    document.getElementById("score").innerHTML=countScore+"/"+(question.length);
    
}
function runTimer()
{
    if(timeleft == 0){
        if(queIndex<question.length)
        {
            userAns[queIndex]=-1;
            incrementIndex();          
        }
        clearInterval(timeInterval);
        timeleft=10;            
        }
    else
    {
        document.getElementById("queTimer").textContent="00 : "+(timeleft-1);
        timeleft -= 1;
    }  
}
