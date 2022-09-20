let spans=document.querySelectorAll("span");
let input= document.querySelector("input");
let button= document.querySelector("button");
// let RandomNumbers1=[0,1,2,3,4,5,6,7,8,9];
// let RandomNumbers2=[0,1,2,3,4,5,6,7,8,9];
let RandomNumber1;
let RandomNumber2;
function getNumber() {
  RandomNumber1= Math.floor(Math.random()*10);
 RandomNumber2= Math.floor(Math.random()*10);
 spans[0].textContent=Number(RandomNumber1);
spans[1].textContent=Number(RandomNumber2); 
}

getNumber();

// spans[0].textContent=Number(RandomNumber1);
// spans[1].textContent=Number(RandomNumber2);

 function Addition() {
   
    let Resultat= Math.floor(RandomNumber1+RandomNumber2);
    if (Resultat==input.value) {
        alert("Correct");
        getNumber();
    }else{
        alert(`Sorry. Incorrect. The correct answer is ${Resultat}`);
        getNumber();
    } 
    input.value="";
 }
 button.addEventListener("click",Addition);