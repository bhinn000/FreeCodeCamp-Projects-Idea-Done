//I did 

//color collection
const colors = ["green", "red", "#f15025"];
// "rgba(133,122,200)"

//element
const btn=document.getElementById('btn')
const bodyBack=document.querySelector('main')
const colorName=document.querySelector('.color')

//random number
const randomNumber=function(){
    const op=Math.floor(Math.random() * 3) ;//array starts from 0 hence cant use as well as no need + 1 
    return op;
}
//events
btn.addEventListener('click',function(){
    
    x=randomNumber()
    bodyBack.style.backgroundColor=colors[x]

    colorName.textContent=colors[x]

    console.log(x)
    console.log("colors[" + x + "]")
    console.log(colors[x])
    
    
})