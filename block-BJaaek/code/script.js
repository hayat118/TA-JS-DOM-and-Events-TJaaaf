let first=document.querySelector('.first banner');
let second=document.querySelector('second');
// let banner=document.getElementBY('banner');
let banner=document.querySelector('.banner')

  let randcol="";
  let allChar="0123456789ABCDEF";

banner.addEventListener("click",myFun);


function myFun(){
   for(let i=0; i<6 ; i++){
     randcol += allChar[Math.floor(Math.random()*16)];
   }
   document.first.style.backgroundColor="#"+randcol;
}