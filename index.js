var randnum1=Math.floor(Math.random()*6)+1;//1-6
var randdiceimg="dice"+randnum1+".png";
var randimsrc="images/"+randdiceimg;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randimsrc);
var randnum2=Math.floor(Math.random()*6)+1;
var randimsrc2="images/dice"+randnum2+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randimsrc2);

if(randnum1>randnum2){
    document.querySelector("h1").innerHTML="&#127881 Player 1 wins!";
}
else if(randnum2>randnum1){
    document.querySelector("h1").innerHTML="&#127881 Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}