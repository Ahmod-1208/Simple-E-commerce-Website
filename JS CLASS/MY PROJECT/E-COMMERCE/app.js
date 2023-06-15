const product = [
    {
        id: 0,
        image: 'IMG/shoe.jpg',
        title: 'SHOE',
        price: 200
    },
    {
        id: 1,
        image: 'IMG/powerbank.jpg',
        title: '250watt POWE-BANK',
        price: 100
    },
    {
        id: 2,
        image: 'IMG/fan.jpg',
        title: '500watt FAN',
        price: 200
    },
    {
        id:3 ,
        image: 'IMG/vest.jpg',
        title: 'DIOR VEST',
        price: 200
    },
    {
        id:4 ,
        image: 'IMG/phone.jpg',
        title: 'SAMSUNG',
        price: 210
    },
]

const categories = [... new set(product.map((item)=>{return item}))]

document.getElementById('searchBar').addEventListener('keyup', (e)=>{
    const searchData = e.target.vaalue.toLowerCase();
    const filterData = categories.filter((item)=> {
        return(
            item.title.toLocaleLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)
  
});
const displayItem = (items) =>{
    document.getElementById('root').innerHTML = items.map((item) =>{
        let {image, title, price} = item;
        return(
            `<div class ='box'>
                 <div class = 'imgBox'>
                   <img class = 'images' src=${image}></img>
                 </div>
              <div class ='bottom'>
                 <p>${title}</p>
                 <h2>$ ${price}.00</h2>
                 <button>Add to cart </button>
            </div>
            
            `
        )
    }).join('')
};
displayItem(categories);