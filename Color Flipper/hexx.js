//I did

//color collection from this
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//element
const btn=document.getElementById('btn')
const bodyBack=document.querySelector('main')
const colorName=document.querySelector('.color')

btn.addEventListener('click',function(){

    let hexColorBegin="#"
    let thisColor;

     for(i=0;i<6;i++){
        hexColorBegin+=hex[randomNumber()];
        console.log(hex[i])
     }
   
    thisColor=hexColorBegin
    bodyBack.style.backgroundColor=thisColor;

    colorName.textContent=thisColor
    console.log(thisColor)      
     
})

const randomNumber=function(){
   const op= Math.floor(Math.random()*hex.length)
   return op
}