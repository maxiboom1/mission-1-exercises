const books = [
  {
    id: "1",
    name: "book1_name",
    autor: "beni_kohen",
    price: "15",
  },
  {
    id: "2",
    name: "book2_name",
    autor: "arik_chen",
    price: "25",
  },
  {
    id: "3",
    name: "book3_name",
    autor: "meir_ariel",
    price: "32",
  },
];

let stringifyed = JSON.stringify(books); // its an book array that stringified with JSON.stringify
const items = JSON.parse(stringifyed);

const content = document.querySelector(".content");

books.forEach((book)=>{
  const div = document.createElement("div");
  div.innerHTML = `
    <p>Book ID: ${book.id}</p>
    <p>Book Name: ${book.name}</p>
    <p>Book Autor: ${book.autor}</p>
    <p>Book Price: ${book.price}</p>
    <p> - - - - - - - - - - - - - - - - - - - - - - </p>
    `
    content.appendChild(div);
})

/* render();
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
 */

//Exercise 2 - myCat

const myCat = {name:"Bastet", age:"6", color:"white", isSterile:"true"}

let div = document.createElement("div");

div.innerHTML = `
  <h1>My cat:</h1>
  <p>Cat name: ${myCat.name}</p>
  <p>Cat age: ${myCat.age}</p>
  <p>Cat color: ${myCat.color}</p>
  <p>Cat is sterile?: ${myCat.isSterile}</p>
  <p> - - - - - - - - - - - - - - - - - - - - - - </p>
  `
content.appendChild(div);

