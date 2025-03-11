class Common {

    constructor()
    {
        this.$pageTitle = () =>  $(`//span[@data-ui-id="page-title-wrapper"]`);
    }

    async LaunchUrl() {
        await browser.url('https://magento.softwaretestingboard.com/');
        await browser.maximizeWindow(); 
    }
}
export default new Common();
