const AutomationHelper = require('./lib/selenium');
const {KEY_MAP} = require('./constants/keymap');
const {Key} = require('selenium-webdriver');

class Executor {
    constructor() {
        this.automationHelper = new AutomationHelper();
    }

    async run(scenario) {
        try {
            for (const line of scenario) {
                const action = line[0];
                let el = null;
                let selector = '';
                let text = '';
                let key = null;
                console.log(action);
                switch(action) {
                    case 'wait':
                        break;
    
                    case 'maximizeWindow':
                        await this.automationHelper.maximize();
                        break;
    
                    case 'open':
                        await this.automationHelper.goTo(line[1]);
                        break;
    
                    case 'enter':
                        selector = line[1];
                        text = line[2];
                        el = await this.automationHelper.findElement(selector);
                        await this.automationHelper.sendKeys(el, text);
                        break;
    
                    // case 'click':
                    //     selector = line[1];
                    //     el = await this.automationHelper.findElement(selector);
                    //     await this.automationHelper.click(el);
                    //     break;

                    // case 'type':
                    //     key = line[1];
                    //     el = await this.automationHelper.findElement('body');
                    //     await this.automationHelper.sendKeys(el, KEY_MAP[key]);
                    //     break;
    
                    default:
                        break;
                }
            }
        }
        catch (ex) {
            console.log('Execution error:', ex);
        }
        finally {
            await this.automationHelper.wait(10000);
            await this.automationHelper.quit();
        }
    }
}

module.exports = Executor;