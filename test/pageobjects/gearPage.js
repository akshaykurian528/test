class GearPage{
    
    constructor()
    {
        this.$watchesButton = () => $(`//a[text()='Watches']`)
    }
}
export default new GearPage();