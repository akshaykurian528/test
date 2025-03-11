import Common from "../pageobjects/common"
import menus from "../pageobjects/menus"
import gearPage from "../pageobjects/gearPage"
import common from "../pageobjects/common"
import watchesPage from "../pageobjects/watchesPage"
import checkoutPage from "../pageobjects/checkoutPage"

describe('Verify User can Purchase a product successfully', function () {

    it('Check the Luma Website load successfully', async function () {
        await Common.LaunchUrl()
        await expect(browser).toHaveTitle('Home Page')
    })  

    it('Check Successfull Navigation of Gear Page', async function () {
        await menus.gearButton()
        const pageTitleText = await common.$pageTitle().getText();
        await expect(pageTitleText).withContext('Expect Gear Page title to contain "Gear"').toContain('Gear');
        await browser.waitUntil(
            async () => await gearPage.$watchesButton().isDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Watches button was not displayed within the timeout'
            }
        );
    })  

    it('Check Successfull Navigation to Watches Page', async function () {
        await gearPage.$watchesButton().click();
        const pageTitleText = await common.$pageTitle().getText();
        await expect(pageTitleText).withContext('Expect Gear Page title to contain "Watches"').toContain('Watches');
        const watchProducts = await watchesPage.$watchProducts();
        await expect(watchProducts.length).withContext('Expected at least one watch product to be displayed, but found none').toBeGreaterThan(0);
    }) 
    
    it('Check Successfull Navigation to Watches Page by Filter "Women"', async function () {
        await watchesPage.genderDropdown()
        const filterValue = await watchesPage.$filterValue().getText();
        await expect(filterValue).withContext('The applied Genderfilter is not "Women"').toContain('Women');
        const watchProducts = await watchesPage.$watchProducts();
        await expect(watchProducts.length).withContext('Expected at least one watch product to be displayed, but found none').toBeGreaterThan(0);
    })

    it('Click on "Sort By" and sorting by Price', async function () {
        await watchesPage.sortDropdown();
    })

    it('Add a single item to the cart', async function () {
        await watchesPage.addToCart();
        const successMessage = await watchesPage.$successMessage();
        await successMessage.waitForDisplayed({ timeout: 5000 });
        await expect(successMessage).toBeDisplayed();
    });

    it('Check Successfull Navigation to Shopping Cart Page using Shopping Cart Link', async function () {
        await watchesPage.$shoppingCartLink().click();
        const pageTitleText = await common.$pageTitle().getText();
        await expect(pageTitleText).withContext('Expect Shopping Cart Page title to contain "Shopping Cart"').toContain('Shopping Cart');
    })

    it('Increment the item count by clearing the quantity text box', async function () {
        await watchesPage.incrementItemcount();
        await expect(this.$qtyInput).toHaveValue('2');
    })

    it('Decrement the item count by clearing the quantity text box', async function () {
        await watchesPage.decrementItemcount();
        await expect(this.$qtyInput).toHaveValue('1');
    })

    it('Check Successfull Navigation to Proceed to Checkout page', async function () {
        await checkoutPage.$checkOutbutton().click();
        const pageTitleText = await common.$pageTitle().getText();
        await expect(pageTitleText).withContext('Expect Check out Page title to contain "Checkout"').toContain('Checkout');
    })

    it('Fill in the details on the Checkout Page and click the "Next" button ', async function () {
        await checkoutPage.addUserdetails();
    })

})
