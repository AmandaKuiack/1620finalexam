const div = document.querySelector(".selection");
const ul = document.querySelector(".shopping");

let albums = [{ name: "Album 1", price: 12.99, addedToCart: false },
{ name: "Album 2", price: 14.99, addedToCart: false}, { name: "Album 3", price: 9.99, addedToCart: false }, { name: "Album 4", price: 19.99, addedToCart: false }];


function albumSelect(e){
    //gets target's identity
    let clickedImg = e.target.id
    console.log(clickedImg)
    addToCart(clickedImg);
        
    
}
function addToCart(e){
    for (let item of albums){
        if (item.name === e){
            console.log(`Loading contents of ${item.name}`)
            // let selection = albums.item
            let newLi = document.createElement("li");
            let img = document.createElement("img");
            let albumName = document.createTextNode(`${item.name}`);
            let price = document.createTextNode(`${item.price}`);
            img.src = `Images/${item.name}.png`;
            img.setAttribute("height", "50px");
            img.setAttribute("width", "50px");
            img.setAttribute("alt", `${item.name}`);
            newLi.appendChild(img);
            newLi.appendChild(albumName);
            newLi.appendChild(price);
            ul.appendChild(newLi);
        }
    }
}

div.addEventListener('click', albumSelect); 