// Exercise 1 - Books

const books = [
    {id:"1", name:"book1_name", autor:"beni_kohen", price:"15"},
    {id:"2", name:"book2_name", autor:"arik_chen", price:"25"},
    {id:"3", name:"book3_name", autor:"meir_ariel", price:"32"},
]

let stringifyed = JSON.stringify(books); // its an book array that stringified with JSON.stringify
const items = JSON.parse(stringifyed);

alert(stringifyed) 
console.log(books);
console.log(items);

render();

function render(){
    const node = document.createElement("div");
    node.innerHTML = textContentBuider(books);;
    document.getElementById('dynamic_content').appendChild(node);
}

function textContentBuider(books){
    
    let innerHtmlContent = "";
    
    for (const book of books){
        innerHtmlContent += createBookText(book); 
    }

    return innerHtmlContent; 
}

function createBookText(book){
    const textData = `<p>Book ID: ${book.id}</p>
    <p>Book Name: ${book.name}</p>
    <p>Book Autor: ${book.autor}</p>
    <p>Book Price: ${book.price}</p>
    <p> - - - - - - - - - - - - - - - - - - - - - - </p>
    `
    return textData;
}

// Exercise 2 - myCat

const myCat = {name:"Bastet", age:"6", color:"white", isSterile:"true"}
const myCatStringified = JSON.stringify(myCat);
alert(myCatStringified);
const yourCat = JSON.parse(myCatStringified);

renderCat(yourCat);

function renderCat(yourCat){
    const textData = `<p>Name: ${yourCat.name}</p>
    <p>Age: ${yourCat.age}</p>
    <p>Color: ${yourCat.color}</p>
    <p>Is Sterile: ${yourCat.isSterile}</p>
    `
    const node = document.createElement("div");
    node.innerHTML = textData;
    document.getElementById('dynamic_content2').appendChild(node);
}
