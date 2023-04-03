export default class BaseActions {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page
  }

  async goTo(url) {
    await this.page.goto(url)
  }
}
