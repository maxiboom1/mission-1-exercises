document.querySelector("#contact").addEventListener('submit',onSubmit);

function onSubmit(event){
    event.preventDefault(); 
    const formData = new FormData(event.target);
    for (const [key, value] of formData) {
        console.log(`Key: ${key}, and value is: ${value}`)
    }
}
 