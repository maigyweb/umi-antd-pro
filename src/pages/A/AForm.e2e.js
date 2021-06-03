const puppeteer = require('puppeteer');

const BASE_URL = `http://localhost:${process.env.PORT || 8000}`;

describe('Form', () => {
  it('Form request test', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`${BASE_URL}/a/form`);
    await page.on('load');

    page.on('request', (req) => {
      expect(req.url()).toBe('http://localhost:8080/a/postform');
    });

    await page.setRequestInterception(true);
    await page.click('#post-btn');

    await browser.close();
  });

  it('Form UI test', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`${BASE_URL}/a/form`);
    await page.on('load');

    page.on('request', (req) => {
      expect(req.url()).toBe('http://localhost:8080/a/getform?company=xxx&name=mai');
    });

    await page.click('button.ant-btn-primary');
    await page.waitForSelector('div[role=alert]', 1000);
    const alertDoms = await page.$$eval('div[role=alert]', (doms) =>
      doms.map((dom) => dom.innerText),
    );
    expect(alertDoms).toContain('请输入公司');
    expect(alertDoms).toContain('请输入姓名');

    await page.type('#company', 'google');
    await page.type('#users_0_name', 'mai');
    await page.click('button.ant-btn-primary');

    await browser.close();
  });
});

/* 
const { uniq } = require('lodash');
const RouterConfig = require('../../config/config').default.routes;

const BASE_URL = `http://localhost:${process.env.PORT || 8000}`;

function formatter(routes, parentPath = '') {
  const fixedParentPath = parentPath.replace(/\/{1,}/g, '/');
  let result = [];
  routes.forEach((item) => {
    if (item.path) {
      result.push(`${fixedParentPath}/${item.path}`.replace(/\/{1,}/g, '/'));
    }
    if (item.routes) {
      result = result.concat(
        formatter(item.routes, item.path ? `${fixedParentPath}/${item.path}` : parentPath),
      );
    }
  });
  return uniq(result.filter((item) => !!item));
}

beforeEach(async () => {
  await page.goto(`${BASE_URL}`);
  await page.evaluate(() => {
    localStorage.setItem('antd-pro-authority', '["admin"]');
  });
});

describe('Ant Design Pro E2E test', () => {
  const testPage = (path) => async () => {
    await page.goto(`${BASE_URL}${path}`);
    await page.waitForSelector('footer', {
      timeout: 2000,
    });
    const haveFooter = await page.evaluate(
      () => document.getElementsByTagName('footer').length > 0,
    );
    expect(haveFooter).toBeTruthy();
  };

  const routers = formatter(RouterConfig);
  routers.forEach((route) => {
    it(`test pages ${route}`, testPage(route));
  });

  it('topmenu should have footer', async () => {
    const params = '?navTheme=light&layout=topmenu';
    await page.goto(`${BASE_URL}${params}`);
    await page.waitForSelector('footer', {
      timeout: 2000,
    });
    const haveFooter = await page.evaluate(
      () => document.getElementsByTagName('footer').length > 0,
    );
    expect(haveFooter).toBeTruthy();
  });
});
*/
