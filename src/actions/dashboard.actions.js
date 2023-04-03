import DashboardPage from '../pages/dashboard.page'
import BaseActions from './base.actions'

/**
 * @class DashboardPageActions
 */
export default class DashboardPageActions extends BaseActions {
  /**
   * Initializes a new instance {@link DashboardPageActions}
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page)
    this.dashboardPage = new DashboardPage(page)
  }

  async signIn() {
    await this.page.waitForSelector(this.dashboardPage.signInLink, { state: 'visible' })
    await this.page.click(this.dashboardPage.signInLink)
  }
}
