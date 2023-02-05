const IMAGE_PATH_ITEM = "./img/";

// Create item constructor
class Item {
    constructor(item) {
        Object.assign(this, item);                                               // Assign all item properties
        // Assign new properties
        this.like = false;                                                      // like by default  
        this.maxAmountInStore = Math.round(Math.random() * 400 + 1000);         // random value
        this.orderInfo.ordersNumber = Math.round(Math.random() * 500 + 300);    //random value
        this.isToBuy = this.orderInfo.inStock > 0;                              // Create the isToBuy property (available for purchase)
    }

}

// Create an ItemsList class in which we create an array of the new item based on the original items array

class ItemsList {
    constructor () {
        this.items = items.map(item => new Item(item));
    }
}

// Create a class that will render the cards

class RenderCards {
    constructor() {
        this.cardContainer = document.querySelector('.cardContainer');          // put a tag with the class cardContainer in the cardContainer property
        this.renderCards(itemsList.items);
    }

    // render One card
    static renderOneCard(item) {
        // new element DOM for card
        const productCard = document.createElement('div');      // Creating a div for a product card
        productCard.className = "product-card";                 // Add class

        // Filling the card with the necessary information
        productCard.innerHTML = `                               
            <div class="containerForProductCard">
                <img class="product-like" src="img/like_empty.svg" alt="like">
                <img class="product-card__img" src="${IMAGE_PATH_ITEM + item.imgUrl}" alt=${item.name}>
                <h2 class="product-title">${item.name}</h2>
                <h3 class="product-stock-status"><span class="bold-text">${item.orderInfo.inStock}</span> left in stock</h3>
                <h3 class="product-price">Price: <span class="bold-text">${item.price}</span> $</h3>
                <button class="product-card__btn">Add to cart</button>
            </div>

            <div class="product-footer-container">

                <div class="product-footer-item-1">
                    <p class="product-reviews"><span class="bold-text">${item.orderInfo.reviews}%</span> Positive reviews </p>
                    <p class="product-footer-item-1-paragraph">Above average</p>
                </div>

                <div class="product-footer-item-2">
                    <p class="product-orders">${item.orderInfo.ordersNumber}</p>
                    <p>orders</p>
                </div>

            </div>     
        `;

        // btn add to cart
        const btnAddToCart = productCard.querySelector('.product-card__btn');
        const stockStatus = productCard.querySelector(".product-stock-status");

        if (item.orderInfo.inStock === 0) {
            stockStatus.classList.add("empty");
            btnAddToCart.classList.add("empty");
            btnAddToCart.disabled = true;
        }

        // like button
        let likeOfProduct = productCard.querySelector(".product-like");

        if (item.like) {
            likeOfProduct.classList.add('active');
        }
        function getLike() {
            likeOfProduct.classList.toggle('active');
            // item.toggleLike();
        }

        likeOfProduct.addEventListener("click", getLike);

        return productCard;
        
    }

  
    renderCards (items) {                      // render all cards
      
        this.cardContainer.innerHTML = '';     // Clear container before render

        const cardsCollection = items.map(item => RenderCards.renderOneCard(item)); // render a complete collection of cards

        return this.cardContainer.append(...cardsCollection);       // add all the cards, that we have rendered, to the DOM
    }
}


const itemsList = new ItemsList;    // create a variable for writing a new instance of the ItemsList class
 
const renderCards = new RenderCards(itemsList);     // render cards on the page based on the Item class object array