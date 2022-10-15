document.querySelector("#save").addEventListener("click",onSave);
document.querySelector("#load").addEventListener("click",onLoad);

function onSave(){
    let tel = document.querySelector("#tel").value;
    localStorage.setItem("tel", tel);
}

function onLoad(){
    alert(localStorage.getItem("tel"));
}