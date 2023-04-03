import BasePage from './base.page'

export default class DashboardPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page)
    this.signInLink = '//li/a[text()="Sign in"]'
  }
}
