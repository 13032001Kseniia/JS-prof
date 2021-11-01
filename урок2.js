class ProductList{
    constructor(container='.products'){
        this.container=container;
        this.goods=[];
        this._fetchProducts();
        this.render();
    }
    _fetchProducts(){
        this.goods=[
            {id:1,title:'Notebook',price:2000},
    {id:2,title:'Mouse',price:20},
    {id:3,title:'Keyboard',price:200},
    {id:4,title:'Gamepad',price:50},
        ];
    }
    render(){
        const block=document.querySelector(this.container);
        for(let product of this.goods){
            const item=new ProductItem(product);
            block.innerHTML=block.innerHTML+item.render();
        }
    }
    sumProduct(){
        let s=0;
        for(let product of this.goods){
            s=s+product.price;
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
    addBasket(){

    };
    deliteBasket(){

    };
    changeBasket(){

    };
    render(){};
}