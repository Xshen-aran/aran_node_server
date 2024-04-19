import { RemoteOptions } from '@/interfaces/interface';
import { Provide, Inject } from '@midwayjs/core';
import { chromium, Page } from 'playwright';
import assert from 'node:assert';
import { error } from 'node:console';

@Provide()
export class UiService {
  @Inject()
  playwrightDevPage: PlaywrightDevPage;
  async connectRemote(options: RemoteOptions) {
    return options;
  }
  async playwright_demo() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.baidu.com/');
    page.waitForSelector('#kw').catch(e => {
      throw new error(e);
    });

    assert((await page.title()) === 'Example Domain');

    // Teardown
    await context.close();
    await browser.close();
  }
  async generate_cases() {
    return Promise.resolve(this);
  }
}

@Provide()
export class PlaywrightDevPage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }
}
