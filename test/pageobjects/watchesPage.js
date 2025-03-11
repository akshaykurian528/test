class WatchesPage {
    constructor() {
        this.$watchProducts = () => $$(`//li[@class="item product product-item"]`);
        this.$genderDropdown = () => $(`//div[@data-role="title" and text()="Gender"]`);
        this.$womenOption = () => $(`//a[normalize-space(text())="Women"]`);
        this.$filterValue = () => $(`//span[@class="filter-value"]`);
        this.$sortDropdown = () => $(`//div[@class="toolbar-sorter sorter"]//select[@id="sorter"]`);
        this.$addToCartButton = () => $(`//button[@title="Add to Cart"]`);
        this.$successMessage = () => $(`//div[@class="page messages"]`);
        this.$shoppingCartLink =() => $(`//a[text()="shopping cart"]`);
        this.$qtyInput =() => $(`//td[@data-th="Qty"]//div[@class="control qty"]`);
    }

    async genderDropdown() {
        await this.$genderDropdown().click();
        await this.$womenOption().click();
    }

    async sortDropdown() {
        await this.$sortDropdown().click();
        await this.$sortDropdown().selectByAttribute('value', 'price');
    }

    async addToCart() {
        const products = await this.$watchProducts();
        await products[0].click();
        await this.$addToCartButton().click();
    }

    async getSuccessMessageText() {
        const message = await this.$successMessage();
        await message.waitForDisplayed({ timeout: 5000 });
        return await message.getText();
    }
    
    async incrementItemcount() {
        await this.$qtyInput.waitForDisplayed(); 
        await this.$qtyInput.click();  
        await this.$qtyInput.clearValue(); 
        await this.$qtyInput.setValue('2'); 
        await expect(this.$qtyInput).toHaveValue('2'); 
    }

    async decrementItemcount() {
        await this.$qtyInput.waitForDisplayed(); 
        await this.$qtyInput.click();  
        await this.$qtyInput.clearValue(); 
        await this.$qtyInput.setValue('1');
    }
        
}

export default new WatchesPage();
