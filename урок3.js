
const API='https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

class ProductList{
    constructor(container='.products'){
        this.container=container;
        this.goods=[];
        this.allProducts=[];
        this._getProducts()
            .then(data=>{
                this.goods=data;
                this.render()
            });
    }
   _getProducts(){
       return fetch(`${API}/catalogData.json`)
       .then(result=>result.json())
       .catch(error=>{
           console.log(error);
       });
   }
    
    sumProduct(){
        let s=0;
        for(let product of this.goods){
            s=s+product.price;
        }
    }
    render(){
        const block=document.querySelector(this.container);
        for(let product of this.goods){
            const item=new ProductItem(product);
            block.innerHTML=block.innerHTML+item.render();
        }
    }
}
class ProductItem{
    constructor(product,img='1img.jpg'){
        this.title=product.title;
        this.id=product.id;
        this.price=product.price;
        this.img=img;
    }
    render(){
        return`<div class="product-item">
        <img src="${this.img}">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button class="buy-btn">Купить</button>
        </div>`
    }
}
let list=new ProductList();
class Basket{
     constructor(container='.cart-block'){
         this.container=container;
         this.goods=[];
         this._clickBasket();
         this._getBasketItem()
         .then(data=>{
             this.goods=data.contants;
             this.render;
         });
     }
     _getBasketItem(){
        return fetch(`${API}/getBasket.json`)
        .then(result=>result.json())
        .catch(error=>{
            console.log(error);
        })
    }
    render(){
        const block=document.querySelector(this.container);
        for(let product of this.goods){
            const productObj= new BasketItem();
            block.insertAdjacentHTML('beforeend',productObj.render(product));          
        }
    } 
    _clickBasket(){
        document.querySelector(".btn-cart").addEventListener('click',()=>{
            document.querySelector(this.container).classList.toggle('invisible');
        });
    }
}
class BasketItem{
   render(product,img='1img.jpg'){
      return `<div class="cart-item" data-id="${product.id_product}">
      <div class="product-bio">
      <img src="${img}" alt="SOME IMAGE">
      <div class="product-desc">
      <p class="product-title">${product.product_name}</p>
      <p class="product-quantity">Quantity${product.quantity}</p>
      <p class="product single price">${product.price}each</p>
      </div>
      </div>
      <div class="right-block">
      <p class="product-price">$${product.quantity*product.price}</p>
      <button class="del-btn" data-id-"${product.id_product}">&times;</button>
      </div>
      </div> `
   }
}