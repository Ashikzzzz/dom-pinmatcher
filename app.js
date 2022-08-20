function generatePin(){
    const randomNumber= Math.round(Math.random()*10000);
    return randomNumber;
}

function getPin(){
    const pin= generatePin()
    const pinStr= pin+'';
    if(pinStr.length===4){
        return pin;
    }
    else{
        return getPin()
    }
}

document.getElementById('pin-generate').addEventListener('click',function(){
    const pin=getPin()
    const displaPin=document.getElementById('show-pin');
    displaPin.value =pin;
})

document.getElementById('calculator').addEventListener('click',function(event){
    const displayPin=document.getElementById('display-pin')
    const previousNum= displayPin.value;
    const eventNumber= event.target.innerText ;
    if(isNaN(eventNumber)){
       if(eventNumber=='C'){
        displayPin.value='';
       }
       else if(eventNumber=='<'){
        const digit = previousNum.split();
        digit.pop();
        const newDigit= digit.join()
        displayPin.value= newDigit
       }
    }
    else{
       
         const newNum=previousNum+eventNumber;
         displayPin.value =newNum;
        
    }
})

document.getElementById('btn-submit').addEventListener('click',function(){
const showPin= document.getElementById('show-pin');
const generatePin = showPin.value;

const displayPin= document.getElementById('display-pin')
const displayOin= displayPin.value ;
const pinSuccess= document.getElementById('pin-success');
const pinFailure= document.getElementById('pin-failure');
if(generatePin==displayOin){
    
    pinSuccess.style.display = 'block'
    pinFailure.style.display = 'none'
}
else{
   
    pinFailure.style.display = 'block'
    pinSuccess.style.display = 'none'
}

})