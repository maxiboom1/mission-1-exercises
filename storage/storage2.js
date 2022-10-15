document.querySelector("#save").addEventListener("click",onSave);
document.querySelector("#load").addEventListener("click",onLoad);

function onSave(){
    let email = document.querySelector("#email").value;
    sessionStorage.setItem("email", email);
}

function onLoad(){
    alert(sessionStorage.getItem("email"));
}