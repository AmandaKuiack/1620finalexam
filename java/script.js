const div = document.querySelector(".selection");


let albums = [{ name: "Album1", price: 12.99, addedToCart: false },
{ name: "Album2", price: 14.99, addedToCart: false}, { name: "Album3", price: 9.99, addedToCart: false }, { name: "Album4", price: 19.99, addedToCart: false }];


function albumSelect(e){
    //gets target's identity
    let clickedImg = e.target.id
    console.log(clickedImg)
    for (let item of albums){
        if (item.name === clickedImg){
            console.log(`Loading contents of ${item.name}`)
            

        }
    }
}


div.addEventListener('click', albumSelect)