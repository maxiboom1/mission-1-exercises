document.querySelector("#save").addEventListener("click",onSave);
document.querySelector("#load").addEventListener("click",onLoad);

function onSave(){
    let fname = document.querySelector("#fname").value;
    let lname = document.querySelector("#lname").value;
    
    const userData = {
        "fname":fname, 
        "lname":lname
    };

    sessionStorage.setItem("userData", JSON.stringify(userData));
}

function onLoad(){
    let userData = JSON.parse(sessionStorage.getItem("userData"))
    alert(`Name is ${userData.fname}, and the last name is ${userData.lname}`);
}
