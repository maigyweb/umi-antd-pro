const puppeteer = require('puppeteer');

const BASE_URL = `http://localhost:${process.env.PORT || 8000}`;

describe('Form', () => {
    it('Form test', async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(`${BASE_URL}/a/form`);

        await page.type('#company', 'google');
        await page.type('#users_0_name', 'mai');
        await page.click('button.ant-btn-primary');

        // await page.waitForSelector('.ant-message-notice');
        // const haveResult = await page.evaluate(() => document.getElementsByClassName('ant-message-notice').length > 0);
        // expect(haveResult).toBeTruthy();

        // await page.waitForSelector("div[role=alert]", 1500);
        // const alertDoms = await page.$$eval("div[role=alert]", doms => doms.map(dom => dom.innerText));
        // expect(alertDoms.length).toBe(2);
        // expect(alertDoms[0]).toBe('请输入公司');
        // expect(alertDoms[1]).toBe('请输入姓名');

        await page.on('request', req => {
            expect(req.url()).toBe('http://localhost:8080/a/form');
            expect(req.postData()).toBe('?company=xxx&name=mai');
        })

        await browser.close();
    });
})