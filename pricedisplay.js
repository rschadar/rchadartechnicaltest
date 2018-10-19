
import { ClientFunction } from 'testcafe';
import { Selector } from 'testcafe';

const productquickview = Selector('#js-product-entry-name');


fixture ` A Lolaws website URL`
    .page `http://www.loblaws.ca/`;

test('Launch Loblaws webbsite', async t => {
    await t
        .pressKey('enter');
         .navigateTo('https://www.loblaws.ca');
});


fixture ` B Find Get started carousel text`
    .page `https://www.loblaws.ca`;

test('Find get started carousel text', async t => {
    const element = Selector('#GET STARTED SHOPPING WITH THESE ITEMS');

    if(await element.exists && await element.visible)
        await t.typeText(element, 'GET STARTED SHOPPING WITH THESE ITEMS');
});



fixture ` C Find product carousel`
    .page `https://www.loblaws.ca`;

test('Find product carousel', async t => {
    const element1 = Selector('#module-product-carousel module-product-group');
    const element2 = Selector('#item add-list-item');
    const element3 = Selector('#item add-list-item');


    if(await element1.exists && await element1.visible)
        await t.typeText(element1, '#module-product-carousel module-product-group');
    if(await element2.exists && await element2.visible)
        await t.typeText(element2, '#item add-list-item');
        await t.typeText(element3, '#estimated-price');
        
});


fixture ` D Click on product from carousel`
    .page `https://www.loblaws.ca``;

test('lick on product from carousel', async t => {
    await t
        .click(productquickview )
        .navigateTo('https://www.loblaws.ca/Food/Fruits-%26-Vegetables/Vegetables/Leeks%2C-Cucumbers-%26-Celery/Farmer%27s-Market-English-Cucumber/p/20828461001_EA');
        
});
