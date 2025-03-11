class Menus {
    constructor() {
        this.$gearButton = () => $(`//a[@id='ui-id-6']`);
    }

    async gearButton() {
        await this.$gearButton().click();
    }
}

export default new Menus();
