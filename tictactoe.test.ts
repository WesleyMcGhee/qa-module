import { Builder, Capabilities, By } from "selenium-webdriver"
import { convertToObject } from "typescript"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click(); 
});
test('I can click top right', async () => {
    let upRight = await (await driver).findElement(By.id('cell-2'));
    await upRight.click();
    expect(await upRight.getText()).toEqual('X');
})
test('I can click top left', async () => {
    let upLeft = await (await driver).findElement(By.id('cell-0'));
    await upLeft.click();
    expect(await upLeft.getText()).toEqual('X');
})
test('I can click bottom right', async () => {
    let bottomRight = await (await driver).findElement(By.id('cell-8'));
    await bottomRight.click();
    expect(await bottomRight.getText()).toEqual('X');
})