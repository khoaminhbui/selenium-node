const {Builder, By, Key, until, promise} = require('selenium-webdriver');

class AutomationHelper {
    constructor () {
        this.driver = new Builder().forBrowser('chrome').build();
    }
    
    // window operations
    async goTo(url) {
        return this.driver.navigate().to(url);
    }

    async maximize() {
        await this.driver.manage().window().maximize();
    }

    async close() {
        await this.driver.close();
    }

    async switchWindow(windowHandle) {
        await this.driver.switchTo().window(windowHandle);
    }

    async switchToParentFrame() {
        await this.driver.switchTo().parentFrame();
    }

    async switchFrame(index) {
        await this.driver.switchTo().frame(index);
    }

    async acceptAlert() {
        await this.driver.switchTo().alert().accept();
    }

    async getWindowHandle() {
        return await this.driver.getWindowHandle();
    }

    async getAllWindowHandles() {
        return await this.driver.getAllWindowHandles();
    }

    async getWindowTitle() {
        return await this.driver.getTitle();
    }

    async quit() {
        await this.driver.quit();
    }

    async wait(ms) {
        await promise.delayed(ms);
    }

    async waitTitle(title, timeout) {
        await this.driver.wait(until.titleIs(title), timeout);
    }

    async pressKey(specialKey) {
        await this.driver.sendKeys(specialKey).perform();
    }

    // element operations
    async moveMouseTo(element) {
        await this.driver.actions().move({origin: element}).perform();
    }

    async findElements(cssSelector) {
        return await this.driver.findElements(By.css(cssSelector));
    }

    async findElement(cssSelector) {
        return await this.driver.findElement(By.css(cssSelector));
    }

    async findChildren(element, cssSelector) {
        return await element.findElements(By.css(cssSelector));
    }
    
    async findChild(element, cssSelector) {
        return await element.findElement(By.css(cssSelector));
    }
    
    async click(element) {
        await element.click();
    }

    async sendKeys(element, ...params) {
        await element.sendKeys(...params);
    }

    async getAttribute(element, attr) {
        return await element.getAttribute(attr);
    }    
}

module.exports = AutomationHelper;