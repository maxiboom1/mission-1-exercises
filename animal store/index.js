document.querySelector("#contact").addEventListener('submit',onSubmit);

function onSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObj = formDataBuider(formData);
    resetBG(document.querySelectorAll("form input"));
    validation(formObj);
}

function resetBG(elements){
    for(const el of elements){
        el.style.backgroundColor = "white";
    }
}

function formDataBuider(formData){
    const dataObj = {};
    
    for (const [key, value] of formData) {
        dataObj[key] = value;
    }
    
    return dataObj;
}

function validation(formObj){
    
    if(formObj.fname == ""){
        document.querySelector("#fname").style.backgroundColor = "pink";
        alert("please fill first name");
    }
    else if(formObj.lname == ""){
        document.querySelector("#lname").style.backgroundColor = "pink";
        alert("please fill last name");
    }
    else if(formObj.msg == ""){
        document.querySelector("#msg").style.backgroundColor = "pink";
        alert("please fill message");
    } else {
        window.location.replace("save.html"); // All valid, continue to save.html page   
    }
}