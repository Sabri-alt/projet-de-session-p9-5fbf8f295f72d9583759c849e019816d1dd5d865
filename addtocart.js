const product = [
     {
        id : 1,
        image: 'images/1E.jpg',
        title: "Velouté de Courge Musquée à l'Érable",
        price: 15,
    },
    {
        id : 9,
        image: 'images/2E.jpg',
        title: "Tartare de Saumon du Pacifique",
        price: 12,
    },
    {
        id : 10,
        image: 'images/3E.jpg',
        title: "Salade de Canard Fumé",
        price: 14,
    },
    {
        id : 0,
        image: 'images/1PP.jpg',
        title: "Magret de Canard à l'Érable et aux Canneberges",
        price: 20,
    },
   
    {
        id : 2,
        image: 'images/2PP.jpg',
        title: "Cassoulet Canadien",
        price: 17,
    },
    {
        id : 8,
        image: 'images/3PP.jpg',
        title: "Pavé de Flétan de la Colombie-Britannique",
        price: 15,
    },
    {
        id : 3,
        image: 'images/1D.jpg',
        title: "Tarte Tatin aux Pommes et Sirop d'Érable",
        price: 18,
    },
     {
        id : 11,
        image: 'images/2D.jpg',
        title: "Pouding Chômeur au Bleuet",
        price: 10,
    },
    {
        id : 4,
        image: 'images/3D.jpg',
        title: "Assiette de Fromages Canadiens",
        price: 18,
    },
    {
        id : 5,
        image: 'images/1B.jpg',
        title: "Sélection de vins canadiens",
        price: 10,
    },
    {
        id : 6,
        image: 'images/2B.jpg',
        title: "Cidres de Glace Québécois",
        price: 10,
    },
    {
        id : 7,
        image: 'images/3B.jpg',
        title: "Bières Artisanales Canadiennes",
        price: 10,
    },  
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}