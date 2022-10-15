document.querySelector("#save").addEventListener("click",onSave);
document.querySelector("#load").addEventListener("click",onLoad);

function onSave(){
   
    const adress = {};
    
    for (const item of document.querySelectorAll("input")){
        adress[item.id] = item.value;    
    }
    
    validate(adress)
}

function onLoad(){
    let adress = JSON.parse(localStorage.getItem("adress"))
    
}

function validate(value){
    if(value =="") {
        return false;}
    else { 
        return true;
    }
}