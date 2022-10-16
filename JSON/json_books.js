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

render()

function render(){
    let content = textContentBuider(books);
    document.getElementById('dynamic_content').innerHTML = ""; // clear canvas before printing new card_list
    const node = document.createElement("div");
    node.innerHTML = content;
    document.getElementById('dynamic_content').appendChild(node);
}

function textContentBuider(books){
    
    let innerHtmlContent = "";
    
    for(let i = 0; i<books.length; i++){
        
        innerHtmlContent += createBookText(books[i]);

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