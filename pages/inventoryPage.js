class Inventorypage{
    constructor(page){
        this.page = page;
     this.title = page.locator('[data-test="title"]');
     this.items = page.locator('.inventory_item');
     this.itemNames = page.getByTestId("inventory-item-name");
     this.itemPrices = page.getByTestId("inventory-item-price");
     this.sortDropdown = page.getByTestId("product-sort-container");
     this.cartBadge = page.getByTestId('shopping-cart-badge');
         this.cartLink = page.getByTestId("shopping-cart-link");

  }

  async sortBy(option){
    await this.sortDropdown.selectOption(option)
  }

  async getItemNames(){
    return this.itemNames.allTextContents();
  }
  async getItemPrices(){
    const prices = await this.itemPrices.allTextContents();
    return prices.map((price)=>parseFloat(price.replace("$","")))
  }
  async addToCart(productToAdd){
    await this.page.getByTestId(`add-to-cart-${productToAdd}`).click();
  }
  async removeFromCart(productToRemove){
    await this.page.getByTestId(`remove-${productToRemove}`).click();
  }
}

module.exports = Inventorypage;