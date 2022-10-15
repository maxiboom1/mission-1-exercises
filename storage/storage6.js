document.querySelector("#pageColor").addEventListener("change", onSelectChange);

const body = document.querySelector("body");

colorInit();

function onSelectChange(event){
    body.style.backgroundColor = event.target.value; // Set selected color
    localStorage.setItem("bgColor", event.target.value);
}

function colorInit(){
    
    let localColor = localStorage.getItem("bgColor");
    
    if(localColor.length > 0){
        body.style.backgroundColor = localColor;
        document.querySelector("#pageColor").value = localColor; // Set correct value on the color selector
    }

}