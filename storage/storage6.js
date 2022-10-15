document.querySelector("#pageColor").addEventListener("change", onSelectChange);

const savedColor = localStorage.getItem("bgColor");
const body = document.querySelector("body");

if (savedColor.length != 0){
    body.style.backgroundColor = savedColor; // Set saved color onstart
    document.querySelector("#pageColor").value = savedColor;
}

function onSelectChange(event){
    body.style.backgroundColor = event.target.value; // Set selected color
    localStorage.setItem("bgColor", event.target.value);
}