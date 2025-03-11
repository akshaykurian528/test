class CheckOutPage {
    constructor() {
        this.$checkOutbutton =() => $(`//button[@data-role="proceed-to-checkout"]`);
        this.$userEmail = () => $(`//input[@class="input-text" and @id="login-email"]`);
        this.$userFirstName = () => $(`//input[@class="input-text" and @name="firstname"]`);
        this.$userLastName = () => $(`//input[@class="input-text" and @name="lastname"]`);
        this.$userStreet1 = () => $(`//input[@class="input-text" and @name="street[0]"]`);
        this.$userCity = () => $(`//input[@class="input-text" and @name="city"]`);
        
    }

    async addUserdetails() {
        await this.$userEmail().click();
        await this.$userEmail().clearValue();
        await this.$userEmail().setValue("John123@gmail.com");
    }
        
}

export default new CheckOutPage();
