let message = document.querySelector(".message");
let point = 10;
let checkButton = document.getElementById("checkbtn");
let guess = document.querySelector(".guess");
let score = document.querySelector(".score")
let btn = document.querySelector(".btn")
let highscore = document.querySelector(".highscore")
let random=Math.floor(Math.random()*50)+1;


function name1() {return point=10;}


checkButton.onclick = () => {
function name1() {return point=10;}
if(point>0) {
if(guess.value <= 50 && guess.value>0 ){
if (guess.value > random){
message.innerHTML= 'tahmini azaltın'
document.body.style.backgroundColor="red"
point--;
score.innerHTML= point}
else if(guess.value<random){
message.innerHTML= 'tahmini yükseltin'
document.body.style.backgroundColor="orange"
point--;
score.innerHTML= point}
else{
message.innerHTML= 'kazandınız'
document.body.style.backgroundColor="green";
guess.disabled=true;
checkButton.disabled=true;
return point;}
}
else {message.innerHTML="0-50 arası değer girin"}}
else{message.innerHTML='tahmin hakkınız bitti'
document.body.style.backgroundColor="purple";
guess.value="";
guess.disabled=true;
checkButton.disabled=true;
return point;}}



let deger=0;
btn.onclick=function () {
document.body.style.backgroundColor="black";
if(!isNaN(checkButton.onclick())){
if(deger>=checkButton.onclick()){deger=deger; highscore.innerHTML=deger;}
else {deger=checkButton.onclick(); highscore.innerHTML=deger;}};
score.innerHTML=10;
guess.value="";
message.innerHTML='tekrar oyna';
guess.disabled=false;
checkButton.disabled=false;
name1()
} 