const btns=document.querySelectorAll('.btn')
const body=document.querySelector('main')
const displayValue=document.querySelector('#value')

let count=0
btns.forEach(function(btn){
    btn.addEventListener("click",function(){
        
        console.log((btn.textContent).toLowerCase())

        //count
        if(btn.textContent.toLowerCase()=="decrease"){
          count--
        }

        else if(btn.textContent.toLowerCase()=="increase"){
           count++
        }

        else if(btn.textContent.toLowerCase()=="reset"){
          count=0
        }

        //color change
        if(count<0){
            displayValue.style.color="red"
        }
        else if(count>0){
            displayValue.style.color="green"
        }
        else{
            displayValue.style.color="black"
        }

       
        
        displayValue.textContent=count

    })
})