document.querySelector("#save").addEventListener("click",onSave);
document.querySelector("#load").addEventListener("click",onLoad);

function onSave(){
   
    const adress = {};
    
    for (const item of document.querySelectorAll("input")){
        adress[item.id] = item.value;    
    }
    
    validate(adress);
}

function validate(adress){
    
    let valid = true;
    
    for(const property in adress){
     
        document.getElementById(property).style.backgroundColor = "white"; // reset color first
        
        if(adress[property].length == 0){
            document.getElementById(property).style.backgroundColor = "pink";
            console.log('Please fill the ' + property);
            valid = false;         
            break;
        }
    
    }   
    
    if (valid){ save(adress) }
}

function onLoad(){
    let adress = JSON.parse(localStorage.getItem("adress"))
    console.log(`City is ${adress.city}, Street is ${adress.street}, house num is ${adress.house} and index is ${adress.index}`);   
}

function save(adress){
    localStorage.setItem("adress", JSON.stringify(adress))
    resetInputs();
}

function resetInputs(){
    for (const item of document.querySelectorAll("input")){
        item.value = "";    
    }
}